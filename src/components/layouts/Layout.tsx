import { Outlet } from 'react-router-dom'

import { useAuthState } from '@/contexts/AuthContext'

import Navbar from './Navbar'
import './index.css'

function Layout() {
  const authState = useAuthState()

  return (
    <>
      <Navbar isAuth={authState.authenticated} />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
