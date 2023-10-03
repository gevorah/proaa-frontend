import { ReactElement } from 'react'

import { signInPath, signUpPath } from '@/routes/paths'

import Navbar from './Navbar'
import './index.css'

type TemplateProps = { children: ReactElement }

function PublicTemplate({ children }: TemplateProps) {
  return (
    <>
      <Navbar>
        <a href={signInPath}>Log In</a>
        <a href={signUpPath}>Sign Up</a>
      </Navbar>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default PublicTemplate
