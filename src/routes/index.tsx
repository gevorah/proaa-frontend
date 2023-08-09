import Home from '@pages/index'
import Maintenance from '@pages/maintenance'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Maintenance />
  }
])

export default router
