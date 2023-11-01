import Table from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { newResourcePath } from '@/routes/paths'
import { getResources } from '@/services/ResourceService'

function Resources() {
  const { data: resources, isLoading } = useFetch(getResources)

  const headers = [
    { key: 'id', header: 'Id', link: true },
    { key: 'descriptionName', header: 'Description Name' }
  ]

  return (
    <section>
      <h1 className="title">My Resources</h1>
      <Table
        columns={headers}
        data={resources || []}
        isLoading={isLoading}
        emptyMessage="No Resources"
      />
      <a href={newResourcePath} className="btn">
        New Resource
      </a>
    </section>
  )
}

export default Resources
