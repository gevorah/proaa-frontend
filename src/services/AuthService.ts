import type { User } from '@/models/User'
import type { SignUpSchema } from '@/pages/SignUp'
import fetcher from '@/utils/fetcher'
import { signUpUrl } from '@/utils/resources'

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

export { signUp }
