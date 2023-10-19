import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import Resources from '@/pages/Resources'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Topics from '@/pages/Topics'
import TopicPage from '@/pages/Topics/Form'

import {
  editTopicPath,
  homePath,
  newTopicPath,
  resourcesPath,
  signInPath,
  signUpPath,
  topicsPath
} from './paths'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      { path: homePath, element: <Home /> },
      { path: signUpPath, element: <SignUp /> },
      { path: signInPath, element: <SignIn /> },

      { path: topicsPath, element: <Topics /> },
      { path: newTopicPath, element: <TopicPage mode="create" /> },
      { path: editTopicPath, element: <TopicPage mode="edit" /> },

      { path: resourcesPath, element: <Resources /> }
    ]
  }
])

export default router
