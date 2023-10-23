import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

import PrivateTemplate from '@/components/layouts/PrivateLayout'
import Button from '@/components/ui/button'
import Field from '@/components/ui/form/FormField'
import { Topic, TopicDto } from '@/models/Topic'
import { topicsPath } from '@/routes/paths'

const schema = z.object({
  name: z.string().min(1, 'Topic Name is required')
})

type TopicSchema = z.infer<typeof schema>

const FormField = Field<TopicSchema>

type TopicFormProps = {
  title: string
  service: (topic: TopicDto) => Promise<Topic>
  topic?: Topic
}

function TopicForm(props: TopicFormProps) {
  const { title, service, topic } = props
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TopicSchema>({
    resolver: zodResolver(schema),
    values: { name: topic?.name || '' }
  })

  const onSubmit = handleSubmit(data => {
    service({ id: topic?.id, name: data.name }).then(() => {
      navigate(topicsPath)
    })
  })

  return (
    <section>
      <div>
        <h1 className="form-title">{title}</h1>
        <form className="form" onSubmit={e => e.preventDefault()}>
          <FormField
            name="name"
            label="Topic Name"
            type="text"
            placeholder="Topic Name"
            autocomplete="off"
            register={register}
            error={errors.name}
          />
          <Button disabled={isSubmitting} onClick={onSubmit}>
            Save
          </Button>
          <a href={topicsPath} className="link">
            Back to list
          </a>
        </form>
      </div>
    </section>
  )
}

export default TopicForm
