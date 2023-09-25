import type { User } from '@/models/User'
import { SignInSchema } from '@/pages/SignIn'
import type { SignUpSchema } from '@/pages/SignUp'
import fetcher from '@/utils/fetcher'
import { signInUrl, signUpUrl } from '@/utils/resources'

const signUp = async (user: SignUpSchema) => {
  const res = await fetcher<User>(
    signUpUrl,
    {
      method: 'POST',
      body: JSON.stringify(user)
    },
    true
  )
  return res
}

const signIn = async (credentials: SignInSchema) => {
  const res = await fetcher<{ token: string }>(
    signInUrl,
    {
      method: 'POST',
      body: JSON.stringify(credentials)
    },
    true
  )
  localStorage.setItem('token', res.token)
  return res
}

export { signUp, signIn }
