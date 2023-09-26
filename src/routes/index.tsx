import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

import { homePath, signInPath, signUpPath } from './paths'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      { path: homePath, element: <Home /> },
      { path: signUpPath, element: <SignUp /> },
      { path: signInPath, element: <SignIn /> }
    ]
  }
])

export default router
