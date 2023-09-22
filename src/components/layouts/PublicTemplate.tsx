import { ReactElement } from 'react'

import Navbar from './Navbar'
import './index.css'

type TemplateProps = { children: ReactElement }

function PublicTemplate({ children }: TemplateProps) {
  return (
    <>
      <Navbar>
        <div className="nav-menu">
          <a href="/signin">Log In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </Navbar>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default PublicTemplate
