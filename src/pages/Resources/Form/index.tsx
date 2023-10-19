import { useParams } from 'react-router-dom'

import { useFetch } from '@/hooks/useFetch'
import Error from '@/pages/Error'
import ResourceForm from '@/pages/Resources/Form/form'
import { resourcesPath } from '@/routes/paths'
import {
  createResource,
  editResource,
  getResource
} from '@/services/ResourceService'

type ResourcePageProps = {
  mode: 'create' | 'edit'
}

function ResourcePage(props: ResourcePageProps) {
  const { mode } = props

  if (mode === 'create') {
    return <ResourceForm title="Create Resource" service={createResource} />
  }

  const { id } = useParams()
  const { data: resource, error } = useFetch(getResource, Number(id))

  if (error) {
    return (
      <Error
        title="Resource Not Found"
        redirect={resourcesPath}
        page="Resources"
      />
    )
  }

  return (
    <ResourceForm
      title="Edit Resource"
      service={editResource}
      resource={resource}
    />
  )
}

export default ResourcePage
