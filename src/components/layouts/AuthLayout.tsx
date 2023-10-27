import { Navigate, Outlet } from 'react-router-dom'

import { useAuthState } from '@/contexts/AuthContext'
import { homePath } from '@/routes/paths'

function AuthLayout() {
  const authState = useAuthState()

  if (authState.authenticated) return <Navigate to={homePath} />

  return (
    <section>
      <div className="auth">
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout
