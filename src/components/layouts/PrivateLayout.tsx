import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { signInPath } from '@/routes/paths'

import { PrivateNavbar } from './Navbar'
import './index.css'

function PrivateLayout() {
  const isAuth = useAuth()

  if (!isAuth) return <Navigate to={signInPath} />

  return (
    <>
      <PrivateNavbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default PrivateLayout
