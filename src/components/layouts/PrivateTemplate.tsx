import { ReactElement } from 'react'

import { logOutPath } from '@/routes/paths'

import Navbar from './Navbar'
import './index.css'

type TemplateProps = { children: ReactElement }

function PrivateTemplate({ children }: TemplateProps) {
  return (
    <>
      <Navbar>
        <a href={logOutPath}>Log out</a>
      </Navbar>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default PrivateTemplate
