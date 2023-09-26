import PrivateTemplate from '@/components/layouts/PrivateTemplate'
import Button from '@/components/ui/button'
import Table from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { getTopics } from '@/services/TopicService'

function Topics() {
  const { data: topics, isLoading } = useFetch(getTopics)

  const headers = [
    { key: 'id', header: 'Id' },
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
        <Button>New Topic</Button>
      </section>
    </PrivateTemplate>
  )
}

export default Topics
