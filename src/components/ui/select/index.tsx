import clsx from 'clsx'
import { ChangeEvent, forwardRef } from 'react'

import './index.css'

type Option = {
  label: string
  value: string | number
}

type SelectProps = {
  name: string
  placeholder?: string
  value?: string | number
  options?: Option[]
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { name, placeholder, value, options, disabled, onChange, className } =
    props

  return (
    <div className={clsx('select', className)}>
      <select
        ref={ref}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
})

export default Select
export type { SelectProps }
