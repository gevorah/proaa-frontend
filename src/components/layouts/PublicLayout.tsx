import { Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

import { PrivateNavbar, PublicNavbar } from './Navbar'
import './index.css'

function PublicLayout() {
  const isAuth = useAuth()

  return (
    <>
      {!isAuth ? <PublicNavbar /> : <PrivateNavbar />}
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default PublicLayout
