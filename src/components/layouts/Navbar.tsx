import { ReactNode } from 'react'

import {
  homePath,
  resourcesPath,
  signInPath,
  signOutPath,
  signUpPath,
  topicsPath
} from '@/routes/paths'

type NavbarProps = { children: ReactNode }

function Navbar({ children }: NavbarProps) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">{children}</nav>
    </div>
  )
}

function PublicNavbar() {
  return (
    <Navbar>
      <div className="nav-menu">
        <a href={homePath}>Home</a>
      </div>
      <div className="nav-menu">
        <a href={signInPath}>Log In</a>
        <a href={signUpPath}>Sign Up</a>
      </div>
    </Navbar>
  )
}

function PrivateNavbar() {
  return (
    <Navbar>
      <div className="nav-menu">
        <a href={homePath}>Home</a>
        <a href={topicsPath}>Topics</a>
        <a href={resourcesPath}>Resources</a>
      </div>
      <div className="nav-menu">
        <a href={signOutPath}>Log out</a>
      </div>
    </Navbar>
  )
}

export default Navbar
export { PublicNavbar, PrivateNavbar }
