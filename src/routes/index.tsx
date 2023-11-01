import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/components/layouts/AuthLayout'
import Layout from '@/components/layouts/Layout'
import PrivateLayout from '@/components/layouts/PrivateLayout'
import Maintenance from '@/pages/Maintenance'

import { mapRoutes } from './navigation'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Maintenance />,
    children: [
      ...mapRoutes('all'),

      {
        element: <AuthLayout />,
        children: mapRoutes('noAuth')
      },

      {
        element: <PrivateLayout />,
        children: mapRoutes('auth')
      }
    ]
  }
])

export default router
