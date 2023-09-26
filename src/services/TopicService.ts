import { Topics, TopicsTop } from '@/models/Topic'
import { authHeader } from '@/utils/authHeader'
import fetcher from '@/utils/fetcher'
import { topTenUrl, topicsUrl } from '@/utils/resources'

const top10Topics = async () => {
  const topics = await fetcher<TopicsTop>(topTenUrl)
  return topics
}

const getTopics = async () => {
  const headers = authHeader()
  const topics = await fetcher<Topics>(topicsUrl, { headers })
  return topics
}

export { top10Topics, getTopics }
