import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { homePath } from '@/routes/paths'

import { PublicNavbar } from './Navbar'

function AuthLayout() {
  const isAuth = useAuth()

  if (isAuth) return <Navigate to={homePath} />

  return (
    <>
      <PublicNavbar />
      <div>
        <main>
          <section>
            <div className="auth">
              <Outlet />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default AuthLayout
