import { Resources } from '@/models/Resource'
import { authHeader } from '@/utils/authHeader'
import fetcher from '@/utils/fetcher'
import { resourcesUrl } from '@/utils/resources'

const getResources = async () => {
  const headers = authHeader()
  const resources = await fetcher<Resources>(resourcesUrl, { headers })
  return resources
}

export { getResources }
