import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

import PrivateTemplate from '@/components/layouts/PrivateTemplate'
import Button from '@/components/ui/button'
import TextField from '@/components/ui/form/textfield'
import { topicsPath } from '@/routes/paths'
import { createTopic } from '@/services/TopicService'

const schema = z.object({
  name: z.string().min(1, 'Topic Name is required')
})

type TopicSchema = z.infer<typeof schema>

const FormTextField = TextField<TopicSchema>

function NewTopic() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TopicSchema>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(data => {
    createTopic(data).then(() => {
      navigate(topicsPath)
    })
  })

  return (
    <PrivateTemplate>
      <section>
        <div>
          <h1 className="form-title">Add topic</h1>
          <form className="form" onSubmit={e => e.preventDefault()}>
            <FormTextField
              name="name"
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
    </PrivateTemplate>
  )
}

export default NewTopic
