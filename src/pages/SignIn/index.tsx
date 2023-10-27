import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { IResolveParams, LoginSocialFacebook } from 'reactjs-social-login'
import { z } from 'zod'

import Alert from '@/components/ui/alert'
import Button from '@/components/ui/button'
import FormField from '@/components/ui/form/FormField'
import Separator from '@/components/ui/separator'
import { useAuthDispatch } from '@/contexts/AuthContext'
import { HttpError } from '@/models/HttpError'
import { topicsPath } from '@/routes/paths'
import { facebookLogin, signIn } from '@/services/AuthService'

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required')
})

type SignInSchema = z.infer<typeof schema>

function SignIn() {
  const navigate = useNavigate()
  const authDispatch = useAuthDispatch()
  const [error, setError] = useState<HttpError | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInSchema>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(async data => {
    return signIn(data)
      .then(res => onLogin(res.token))
      .catch(e => setError(e))
  })

  const onLogin = (token: string) => {
    setError(null)
    authDispatch.login(token)
    navigate(topicsPath)
  }

  return (
    <>
      {error && <Alert variant="error" description={error.message} />}
      <h1>Log in with your email address</h1>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <FormField
          as="textfield"
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          autocomplete="email"
          register={register}
          error={errors.email}
        />
        <FormField
          as="textfield"
          name="password"
          label="Password"
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
              .then(res => onLogin(res.token))
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
    </>
  )
}

export default SignIn
export type { SignInSchema }
