import PublicTemplate from '@/components/layouts/PublicTemplate'
import { HttpError } from '@/models/HttpError'

type ErrorProps = {
  error: HttpError
  redirect: string
  page: string
}

function Error(props: ErrorProps) {
  const { error, redirect, page } = props
  return (
    <PublicTemplate>
      <section>
        <div>
          <h1 className="title">
            {error.status} {error.message}
          </h1>
          <a href={redirect} className="link">
            Go back to {page} page
          </a>
        </div>
      </section>
    </PublicTemplate>
  )
}

export default Error
