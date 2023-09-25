import { ReactNode } from 'react'

import PublicTemplate from './PublicTemplate'

type TemplateProps = { children?: ReactNode }

function AuthTemplate({ children }: TemplateProps) {
  return (
    <PublicTemplate>
      <section>
        <div className="auth">{children}</div>
      </section>
    </PublicTemplate>
  )
}

export default AuthTemplate
