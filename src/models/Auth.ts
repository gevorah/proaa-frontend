import { User } from './User'

export type Credentials = { token: string }

export type AuthState = {
  user?: User
  token?: string
  authenticated: boolean
}
