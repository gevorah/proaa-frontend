import {
  homePath,
  resourcesPath,
  signInPath,
  signOutPath,
  signUpPath,
  topicsPath
} from '@/routes/paths'

export type NavItem = {
  title: string
  link: string
  position: 'left' | 'right'
  access: 'all' | 'auth' | 'noAuth'
}

export const navItems: NavItem[] = [
  { title: 'Home', link: homePath, position: 'left', access: 'all' },
  { title: 'Topics', link: topicsPath, position: 'left', access: 'auth' },
  { title: 'Resources', link: resourcesPath, position: 'left', access: 'auth' },
  { title: 'Sign In', link: signInPath, position: 'right', access: 'noAuth' },
  { title: 'Sign Up', link: signUpPath, position: 'right', access: 'noAuth' },
  { title: 'Sign Out', link: signOutPath, position: 'right', access: 'auth' }
]

export const filterNavItems = (position: 'left' | 'right', isAuth: boolean) => {
  return navItems.filter(item => {
    const samePosition = item.position === position

    if (item.access === 'all') return samePosition

    const requireAuth = item.access === 'auth'
    return samePosition && requireAuth === isAuth
  })
}
