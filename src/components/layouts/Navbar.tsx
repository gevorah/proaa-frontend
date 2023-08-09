import { ReactElement } from 'react'

type Props = { children: ReactElement }

const Navbar = ({ children }: Props) => {
  return (
    <div className="sticky top-0 z-50 bg-gray-100">
      <nav className="relative flex h-12 px-1.5 lg:px-3">{children}</nav>
    </div>
  )
}

export default Navbar
