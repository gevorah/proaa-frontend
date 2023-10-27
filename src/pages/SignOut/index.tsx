import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/ui/loading'
import { useAuthDispatch } from '@/contexts/AuthContext'
import { homePath } from '@/routes/paths'

function SignOut() {
  const navigate = useNavigate()
  const authDispatch = useAuthDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      authDispatch.logout()
      navigate(homePath, { replace: true })
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return <Loading>Signing Out...</Loading>
}

export default SignOut
