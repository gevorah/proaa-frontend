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
import { HttpError } from '@/models/HttpError'
import { signInPath, topicsPath } from '@/routes/paths'
import { facebookLogin, signUp } from '@/services/AuthService'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters')
})

type SignUpSchema = z.infer<typeof schema>

function SignUp() {
  const navigate = useNavigate()
  const [error, setError] = useState<HttpError | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpSchema>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(data => {
    signUp(data)
      .then(() => {
        setError(null)
        navigate(signInPath)
      })
      .catch(e => setError(e))
  })

  return (
    <>
      {error && <Alert variant="error" description={error.message} />}
      <h1>Sign up with your email address</h1>
      <form onSubmit={e => e.preventDefault()}>
        <FormField
          as="textfield"
          name="name"
          label="Name"
          type="text"
          placeholder="Name"
          autocomplete="name"
          register={register}
          error={errors.name}
        />
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
          Sign up
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
          Already have an account?&nbsp;
          <a href="/signin" className="link">
            Log in
          </a>
        </span>
      </form>
    </>
  )
}

export default SignUp
export type { SignUpSchema }
