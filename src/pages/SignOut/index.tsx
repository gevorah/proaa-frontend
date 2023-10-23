import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/ui/loading'
import { homePath } from '@/routes/paths'
import { signOut } from '@/services/AuthService'

function SignOut() {
  const navigate = useNavigate()

  useEffect(() => {
    signOut()
    setTimeout(() => {
      navigate(homePath, { replace: true })
    }, 1000)
  }, [])

  return <Loading>Signing Out...</Loading>
}

export default SignOut
