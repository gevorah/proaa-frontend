import { Resource, Resources } from '@/models/Resource'
import { authHeader } from '@/utils/authHeader'
import fetcher from '@/utils/fetcher'
import { resourcesUrl } from '@/utils/resources'

const getResources = async () => {
  const headers = authHeader()
  const resources = await fetcher<Resources>(resourcesUrl, { headers })
  return resources
}

const createResource = async (r: Omit<Resource, 'id'>) => {
  const headers = authHeader()
  const resource = await fetcher<Resource>(resourcesUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...r, topicId: r.topic.id })
  })
  return resource
}

export { getResources, createResource }
