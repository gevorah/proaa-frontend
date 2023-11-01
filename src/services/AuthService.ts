import type { Credentials } from '@/models/Auth'
import type { User } from '@/models/User'
import { SignInSchema } from '@/pages/SignIn'
import type { SignUpSchema } from '@/pages/SignUp'
import fetcher from '@/utils/fetcher'
import { facebookLoginUrl, signInUrl, signUpUrl } from '@/utils/resources'

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
  const res = await fetcher<Credentials>(
    signInUrl,
    {
      method: 'POST',
      body: JSON.stringify(credentials)
    },
    true
  )
  return res
}

const facebookLogin = async (token: string) => {
  const res = await fetcher<Credentials>(
    facebookLoginUrl,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    true
  )
  return res
}

export { signUp, signIn, facebookLogin }
