import { User } from './User'

export type Credentials = { token: string }

export type AuthState = {
  user: User | null
  token: string | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}
