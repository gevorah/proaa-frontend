import ResourceForm from '@/pages/Resources/Form/form'
import { createResource } from '@/services/ResourceService'

type ResourcePageProps = {
  mode: 'create' | 'edit'
}

function ResourcePage(props: ResourcePageProps) {
  const { mode } = props

  if (mode === 'create') {
    return <ResourceForm title="Create Resource" service={createResource} />
  }
}

export default ResourcePage
