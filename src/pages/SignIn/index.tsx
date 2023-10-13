import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { IResolveParams, LoginSocialFacebook } from 'reactjs-social-login'
import { z } from 'zod'

import AuthTemplate from '@/components/layouts/AuthTemplate'
import Alert from '@/components/ui/alert'
import Button from '@/components/ui/button'
import TextField from '@/components/ui/form/textfield'
import Separator from '@/components/ui/separator'
import { HttpError } from '@/models/HttpError'
import { topicsPath } from '@/routes/paths'
import { facebookLogin, signIn } from '@/services/AuthService'

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required')
})

type SignInSchema = z.infer<typeof schema>

const FormTextField = TextField<SignInSchema>

function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState<HttpError | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInSchema>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(data => {
    signIn(data)
      .then(() => {
        setError(null)
        navigate(topicsPath)
      })
      .catch(e => setError(e))
  })

  return (
    <AuthTemplate>
      {error && <Alert variant="error" description={error.message} />}
      <h1>Log in with your email address</h1>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <FormTextField
          name="email"
          type="email"
          placeholder="Email"
          autocomplete="email"
          register={register}
          error={errors.email}
        />
        <FormTextField
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          error={errors.password}
        />
        <Button disabled={isSubmitting} onClick={onSubmit}>
          Sign in
        </Button>
        <Separator text="or" />
        <LoginSocialFacebook
          isOnlyGetToken
          appId={import.meta.env.VITE_FB_APP_ID || ''}
          onResolve={({ data }: IResolveParams) => {
            facebookLogin(data.accessToken)
              .then(() => {
                setError(null)
                navigate(topicsPath)
              })
              .catch(e => setError(e))
          }}
          onReject={() => {
            setError(
              new HttpError(
                401,
                'An unexpected error ocurred. Please try logging in again.'
              )
            )
          }}
        >
          <FacebookLoginButton style={{ margin: 0, width: '100%' }} />
        </LoginSocialFacebook>
        <span>
          Don't have an account?&nbsp;
          <a href="/signup" className="link">
            Sign Up
          </a>
        </span>
      </form>
    </AuthTemplate>
  )
}

export default SignIn
export type { SignInSchema }
