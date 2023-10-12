import { useParams } from 'react-router-dom'

import { useFetch } from '@/hooks/useFetch'
import Error from '@/pages/Error'
import TopicForm from '@/pages/Topics/Form/form'
import { topicsPath } from '@/routes/paths'
import { createTopic, editTopic, getTopic } from '@/services/TopicService'

type TopicPageProps = {
  mode: 'create' | 'edit'
}

function TopicPage(props: TopicPageProps) {
  const { mode } = props

  if (mode == 'create') {
    return <TopicForm title="Create Topic" service={createTopic} />
  }

  const { id } = useParams()
  const { data: topic, error } = useFetch(getTopic, Number(id))

  if (error) return <Error error={error} redirect={topicsPath} page="Topics" />

  return <TopicForm title="Edit Topic" service={editTopic} topic={topic} />
}

export default TopicPage
