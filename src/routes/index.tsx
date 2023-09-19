import Home from '@/pages/Home'
import Maintenance from '@/pages/Maintenance'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Maintenance />
  }
])

export default router
