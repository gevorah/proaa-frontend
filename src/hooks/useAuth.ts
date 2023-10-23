import { AuthState } from '@/models/Auth'

import { useLocalStorage } from './useLocalStorage'

export const useAuth = () => {
  const { value: auth } = useLocalStorage<AuthState>('auth')

  if (!auth) return false
  const isAuth = auth.status === 'authenticated'
  const isToken = !!auth.token

  if (isAuth && isToken) return true

  return false
}
