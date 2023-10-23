import { ReactNode } from 'react'

import './index.css'

type LoadingProps = {
  className?: string
  children?: ReactNode
}

function Loading(props: LoadingProps) {
  const { className, children = 'Loading...' } = props
  return <div className={className}>{children}</div>
}

export default Loading
