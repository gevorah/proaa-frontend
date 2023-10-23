import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

import PrivateTemplate from '@/components/layouts/PrivateLayout'
import Button from '@/components/ui/button'
import FormField from '@/components/ui/form/FormField'
import { useFetch } from '@/hooks/useFetch'
import { Resource, ResourceDto } from '@/models/Resource'
import { resourcesPath } from '@/routes/paths'
import { getTopics } from '@/services/TopicService'

const schema = z.object({
  descriptionName: z.string().min(1, 'Description is required'),
  url: z.string().min(1, 'Url is required').url('Url is not valid'),
  topic: z.coerce
    .number({ required_error: 'Topic is required' })
    .positive('Topic is required')
})

type ResourceSchema = z.infer<typeof schema>

type ResourceFormProps = {
  title: string
  service: (resource: ResourceDto) => Promise<Resource>
  resource?: Resource
}

function TopicForm(props: ResourceFormProps) {
  const { title, service, resource } = props
  const navigate = useNavigate()
  const { data: topics } = useFetch(getTopics)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ResourceSchema>({
    resolver: zodResolver(schema),
    values: {
      descriptionName: resource?.descriptionName || '',
      url: resource?.url || '',
      topic: resource?.topic.id || 0
    }
  })

  const onSubmit = handleSubmit(data => {
    const topic = topics?.find(topic => topic.id == data.topic)
    if (!topic) {
      return setError('topic', {
        type: 'validate',
        message: 'Topic is not valid'
      })
    }

    service({ id: resource?.id, ...data, topicId: data.topic }).then(() => {
      navigate(resourcesPath)
    })
  })

  return (
    <section>
      <div>
        <h1 className="form-title">{title}</h1>
        <form className="form" onSubmit={e => e.preventDefault()}>
          <FormField
            as="textfield"
            name="descriptionName"
            label="Description"
            type="text"
            placeholder="Description"
            autocomplete="off"
            register={register}
            error={errors.descriptionName}
          />
          <FormField
            as="textfield"
            name="url"
            label="Url"
            type="text"
            placeholder="Url"
            autocomplete="off"
            register={register}
            error={errors.url}
          />
          <FormField
            as="select"
            name="topic"
            label="Topic"
            placeholder="Select a Topic"
            options={topics?.map(topic => ({
              label: topic.name,
              value: topic.id
            }))}
            register={register}
            error={errors.topic}
          />
          <Button disabled={isSubmitting} onClick={onSubmit}>
            Save
          </Button>
          <a href={resourcesPath} className="link">
            Back to list
          </a>
        </form>
      </div>
    </section>
  )
}

export default TopicForm
