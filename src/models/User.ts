export type User = {
  name: string
  email: string
}

export type AuthState = {
  user: User | null
  token: string | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}
