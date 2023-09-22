import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import SignUp from '@/pages/SignUp'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    errorElement: <Maintenance />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> }
    ]
  }
])

export default router
