import { AuthState } from '@/models/Auth'

import { localStorageUtil } from './localStorage'

const authHeader = () => {
  const { item: auth } = localStorageUtil<AuthState>('auth')

  if (!auth?.token) return

  return {
    Authorization: `Bearer ${auth.token}`
  }
}

export { authHeader }
