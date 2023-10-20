import { Topic, TopicDto, Topics, TopicsTop } from '@/models/Topic'
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

const getTopic = async (id: number) => {
  const headers = authHeader()
  const topic = await fetcher<Topic>(`${topicsUrl}/${id}`, { headers })
  return topic
}

const createTopic = async (t: Omit<TopicDto, 'id'>) => {
  const headers = authHeader()
  const topic = await fetcher<Topic>(topicsUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(t)
  })
  return topic
}

const editTopic = async (t: TopicDto) => {
  const headers = authHeader()
  const topic = await fetcher<Topic>(`${topicsUrl}/${t.id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(t)
  })
  return topic
}

export { top10Topics, getTopics, getTopic, createTopic, editTopic }
