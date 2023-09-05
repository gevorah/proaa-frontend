import { ReactElement } from 'react'

type NavbarProps = { children: ReactElement }

function Navbar({ children }: NavbarProps) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">{children}</nav>
    </div>
  )
}

export default Navbar
