import './index.css'
import { ReactElement } from 'react'

type LoadingProps = {
  className?: string
  children?: ReactElement
}

function Loading(props: LoadingProps) {
  const { className, children = 'Loading...' } = props
  return <div className={className}>{children}</div>
}

export default Loading
