import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> }
    ]
  }
])

export default router
