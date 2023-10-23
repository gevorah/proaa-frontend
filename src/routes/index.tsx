import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/components/layouts/AuthLayout'
import PrivateLayout from '@/components/layouts/PrivateLayout'
import PublicLayout from '@/components/layouts/PublicLayout'
import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import Resources from '@/pages/Resources'
import ResourcePage from '@/pages/Resources/Form'
import SignIn from '@/pages/SignIn'
import SignOut from '@/pages/SignOut'
import SignUp from '@/pages/SignUp'
import Topics from '@/pages/Topics'
import TopicPage from '@/pages/Topics/Form'

import {
  editResourcePath,
  editTopicPath,
  homePath,
  newResourcePath,
  newTopicPath,
  resourcesPath,
  signInPath,
  signOutPath,
  signUpPath,
  topicsPath
} from './paths'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      {
        element: <PublicLayout />,
        children: [{ path: homePath, element: <Home /> }]
      },

      {
        element: <AuthLayout />,
        children: [
          { path: signUpPath, element: <SignUp /> },
          { path: signInPath, element: <SignIn /> }
        ]
      },
      { path: signOutPath, element: <SignOut /> },

      {
        element: <PrivateLayout />,
        children: [
          { path: topicsPath, element: <Topics /> },
          { path: newTopicPath, element: <TopicPage mode="create" /> },
          { path: editTopicPath, element: <TopicPage mode="edit" /> },

          { path: resourcesPath, element: <Resources /> },
          { path: newResourcePath, element: <ResourcePage mode="create" /> },
          { path: editResourcePath, element: <ResourcePage mode="edit" /> }
        ]
      }
    ]
  }
])

export default router
