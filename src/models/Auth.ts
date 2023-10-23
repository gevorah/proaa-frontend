import { User } from './User'

export type Credentials = { token: string }

export type AuthState = {
  user?: User
  token?: string
  status: 'authenticated' | 'loading' | 'unauthenticated'
}
