import PublicTemplate from '@/components/layouts/PublicTemplate'

type ErrorProps = {
  title: string
  redirect: string
  page: string
}

function Error(props: ErrorProps) {
  const { title, redirect, page } = props
  return (
    <PublicTemplate>
      <section>
        <div>
          <h1 className="title">{title}</h1>
          <a href={redirect} className="link">
            Go back to {page} page
          </a>
        </div>
      </section>
    </PublicTemplate>
  )
}

export default Error
