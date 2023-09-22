import clsx from 'clsx'
import { ComponentProps } from 'react'

import './index.css'

type ButtonProps = ComponentProps<'button'>

function Button(props: ButtonProps) {
  const { className, children, ...rest } = props
  return (
    <button className={clsx('btn', className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
