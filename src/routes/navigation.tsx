import { ReactElement } from 'react'

import Home from '@/pages/Home'
import Resources from '@/pages/Resources'
import ResourcePage from '@/pages/Resources/Form'
import SignIn from '@/pages/SignIn'
import SignOut from '@/pages/SignOut'
import SignUp from '@/pages/SignUp'
import Topics from '@/pages/Topics'
import TopicPage from '@/pages/Topics/Form'
import {
  editResourcePath,
  editTopicPath,
  homePath,
  newResourcePath,
  newTopicPath,
  resourcesPath,
  signInPath,
  signOutPath,
  signUpPath,
  topicsPath
} from '@/routes/paths'

export type Access = 'all' | 'auth' | 'noAuth'

export type NavItem = {
  title: string
  link: string
  position?: 'left' | 'right'
  access?: Access
  element?: ReactElement
}

export const navItems: NavItem[] = [
  {
    title: 'Home',
    link: homePath,
    position: 'left',
    access: 'all',
    element: <Home />
  },
  {
    title: 'Topics',
    link: topicsPath,
    position: 'left',
    access: 'auth',
    element: <Topics />
  },
  {
    title: 'Create Topic',
    link: newTopicPath,
    access: 'auth',
    element: <TopicPage mode="create" />
  },
  {
    title: 'Edit Topic',
    link: editTopicPath,
    access: 'auth',
    element: <TopicPage mode="edit" />
  },
  {
    title: 'Resources',
    link: resourcesPath,
    position: 'left',
    access: 'auth',
    element: <Resources />
  },
  {
    title: 'Create Resource',
    link: newResourcePath,
    access: 'auth',
    element: <ResourcePage mode="create" />
  },
  {
    title: 'Edit Resource',
    link: editResourcePath,
    access: 'auth',
    element: <ResourcePage mode="edit" />
  },
  {
    title: 'Sign In',
    link: signInPath,
    position: 'right',
    access: 'noAuth',
    element: <SignIn />
  },
  {
    title: 'Sign Up',
    link: signUpPath,
    position: 'right',
    access: 'noAuth',
    element: <SignUp />
  },
  {
    title: 'Sign Out',
    link: signOutPath,
    position: 'right',
    access: 'auth',
    element: <SignOut />
  }
]

export const filterNavItems = (position: 'left' | 'right', isAuth: boolean) =>
  navItems.filter(item => {
    const samePosition = item.position === position

    if (item.access === 'all') return samePosition

    const requireAuth = item.access === 'auth'
    return samePosition && requireAuth === isAuth
  })

export const mapRoutes = (access: Access) =>
  navItems
    .filter(item => item.access === access)
    .map(item => ({ path: item.link, element: item.element }))
