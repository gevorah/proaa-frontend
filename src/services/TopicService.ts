import { TopicsTop } from '@/models/Topic'
import fetcher from '@/utils/fetcher'
import { topTenUrl } from '@/utils/resources'

const top10Topics = async () => {
  const topics = await fetcher<TopicsTop>(topTenUrl)
  return topics
}

export { top10Topics }
