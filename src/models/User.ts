export type User = {
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export type AuthState = {
  user: User | null
  token: string | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}
