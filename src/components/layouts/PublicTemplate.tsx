import './index.scss'
import { ReactElement } from 'react'
import Navbar from './Navbar'

type TemplateProps = { children: ReactElement }

function BaseTemplate({ children }: TemplateProps) {
  return (
    <>
      <Navbar>
        <div className="nav-menu">
          <a href="#login">Log In</a>
          <a href="#signup">Sign Up</a>
        </div>
      </Navbar>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default BaseTemplate
