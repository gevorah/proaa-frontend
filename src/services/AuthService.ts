import type { User } from '@/models/User'
import type { SignUpSchema } from '@/pages/SignUp'
import fetcher from '@/utils/fetcher'

const signUp = async (user: SignUpSchema) => {
  const res = await fetcher<User>(
    '/auth/signup',
    {
      method: 'POST',
      body: JSON.stringify(user)
    },
    true
  )
  return res
}

export { signUp }
