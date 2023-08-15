import { ReactElement } from 'react'
import Navbar from './Navbar'

type Props = { children: ReactElement }

function BaseTemplate({ children }: Props) {
  return (
    <>
      <Navbar>
        <div className="mx-6 flex h-full w-full items-center justify-end gap-6">
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
