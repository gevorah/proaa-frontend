import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import PublicTemplate from '@/components/layouts/PublicTemplate'
import Alert from '@/components/ui/alert'
import Button from '@/components/ui/button'
import TextField from '@/components/ui/form/textfield'
import { HttpError } from '@/models/HttpError'
import { signUp } from '@/services/AuthService'

import './index.css'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters')
})

type SignUpSchema = z.infer<typeof schema>

const FormTextField = TextField<SignUpSchema>

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
        navigate('/signin')
      })
      .catch(e => setError(e))
  })

  return (
    <PublicTemplate>
      <section>
        <div className="sign-up">
          {error && <Alert variant="error" description={error.message} />}
          <h1>Sign up with your email address</h1>
          <form className="form" onSubmit={e => e.preventDefault()}>
            <FormTextField
              name="name"
              type="text"
              placeholder="Name"
              autocomplete="name"
              register={register}
              error={errors.name}
            />
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
              Sign up
            </Button>
            <span>
              Already have an account?&nbsp;
              <a href="/signin" className="link">
                Log in
              </a>
            </span>
          </form>
        </div>
      </section>
    </PublicTemplate>
  )
}

export default SignUp
export type { SignUpSchema }
