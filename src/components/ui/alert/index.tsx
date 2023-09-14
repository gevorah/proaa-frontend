import clsx from 'clsx'

import './index.css'

type AlertProps = {
  variant?: 'info' | 'error'
  title?: string
  description?: string
}

function Alert(props: AlertProps) {
  const { variant = 'info', title, description } = props
  return (
    <div className={clsx('alert', variant)}>
      <h1 className="text-md">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default Alert
