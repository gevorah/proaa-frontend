import PrivateTemplate from '@/components/layouts/PrivateLayout'
import Table from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { newTopicPath } from '@/routes/paths'
import { getTopics } from '@/services/TopicService'

function Topics() {
  const { data: topics, isLoading } = useFetch(getTopics)

  const headers = [
    { key: 'id', header: 'Id', link: true },
    { key: 'name', header: 'Name' }
  ]

  return (
    <section>
      <h1 className="title">My Topics</h1>
      <Table
        columns={headers}
        data={topics || []}
        isLoading={isLoading}
        emptyMessage="No Topics"
      />
      <a href={newTopicPath} className="btn">
        New Topic
      </a>
    </section>
  )
}

export default Topics
