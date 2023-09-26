import { ReactNode } from 'react'

type NavbarProps = { children: ReactNode }

function Navbar({ children }: NavbarProps) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="nav-menu">{children}</div>
      </nav>
    </div>
  )
}

export default Navbar
