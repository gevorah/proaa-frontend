import { Navigate, Outlet } from 'react-router-dom'

import { useAuthState } from '@/contexts/AuthContext'
import { signInPath } from '@/routes/paths'

import './index.css'

function PrivateLayout() {
  const authState = useAuthState()

  if (!authState.authenticated) return <Navigate to={signInPath} />

  return <Outlet />
}

export default PrivateLayout
