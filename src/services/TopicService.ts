import { TopicsTop } from '@models/Topic'
import fetcher from '@utils/fetcher'

const url = import.meta.env.VITE_API_BASE_URL as string

const top10Topics = async () => {
  const topics = await fetcher<TopicsTop>(url + '/topics/top-ten')
  return topics
}

export { top10Topics }
