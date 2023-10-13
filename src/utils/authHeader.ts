import { useLocalStorage } from '@/hooks/useLocalStorage'
import { AuthState } from '@/models/User'

const authHeader = () => {
  const { get } = useLocalStorage<AuthState>('auth')
  const authState = get('state')
  if (!authState) return undefined
  return {
    Authorization: `Bearer ${authState.token}`
  }
}

export { authHeader }
