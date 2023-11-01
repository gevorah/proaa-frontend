import { ReactNode, createContext, useContext } from 'react'

import { AuthState } from '@/models/Auth'

import { useLocalStorage } from '../hooks/useLocalStorage'

type Props = {
  children: ReactNode
}

type AuthDispatch = {
  login: (token: string) => void
  logout: () => void
}

type Context = { state: AuthState; dispatch: AuthDispatch | null }

const initialValue = { authenticated: false } satisfies AuthState

const AuthContext = createContext<Context>({
  state: initialValue,
  dispatch: null
})

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useLocalStorage<AuthState>('auth', initialValue)

  const login = (token: string) => {
    setAuth({ authenticated: true, token })
  }

  const logout = () => {
    setAuth({ authenticated: false })
  }

  return (
    <AuthContext.Provider value={{ state: auth, dispatch: { login, logout } }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthState = () => useContext(AuthContext).state
const useAuthDispatch = () => useContext(AuthContext).dispatch!

export { AuthProvider, useAuthState, useAuthDispatch }
