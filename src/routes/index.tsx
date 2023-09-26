import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Topics from '@/pages/Topics'

import { homePath, signInPath, signUpPath, topicsPath } from './paths'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      { path: homePath, element: <Home /> },
      { path: signUpPath, element: <SignUp /> },
      { path: signInPath, element: <SignIn /> },
      { path: topicsPath, element: <Topics /> }
    ]
  }
])

export default router
