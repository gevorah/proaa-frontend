import { TopicsTop } from '@/models/Topic'
import fetcher from '@/utils/fetcher'

const top10Topics = async () => {
  const topics = await fetcher<TopicsTop>('/topics/top-ten')
  return topics
}

export { top10Topics }
