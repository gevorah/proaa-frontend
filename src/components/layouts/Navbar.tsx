import { NavLink } from 'react-router-dom'

import { filterNavItems } from '@/utils/navbar'

type NavbarProps = { isAuth: boolean }

function Navbar({ isAuth }: NavbarProps) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-menu">
            {filterNavItems('left', isAuth).map(item => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="nav-menu">
            {filterNavItems('right', isAuth).map(item => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
