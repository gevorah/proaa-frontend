import PrivateTemplate from '@/components/layouts/PrivateTemplate'
import Table from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { newTopicPath } from '@/routes/paths'
import { getTopics } from '@/services/TopicService'

import './index.css'

function Topics() {
  const { data: topics, isLoading } = useFetch(getTopics)

  const headers = [
    { key: 'id', header: 'Id', link: true },
    { key: 'name', header: 'Name' }
  ]

  return (
    <PrivateTemplate>
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
    </PrivateTemplate>
  )
}

export default Topics
