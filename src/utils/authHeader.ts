import { useLocalStorage } from '@/hooks/useLocalStorage'
import { AuthState } from '@/models/Auth'

const authHeader = () => {
  const { value: auth } = useLocalStorage<AuthState>('auth')

  if (!auth || !auth.token) return undefined

  return {
    Authorization: `Bearer ${auth.token}`
  }
}

export { authHeader }
