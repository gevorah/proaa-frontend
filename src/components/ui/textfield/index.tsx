import './index.css'
import { forwardRef, ChangeEvent } from 'react'

type TextFieldProps = {
  name: string
  type?: 'text' | 'number' | 'email' | 'password'
  placeholder?: string
  value?: string | number
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  autocomplete?: string
  className?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    name,
    type = 'text',
    placeholder,
    value,
    disabled,
    onChange,
    autocomplete = 'off',
    className
  } = props
  return (
    <div>
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        autoComplete={autocomplete}
        className={'textfield ' + className}
      />
    </div>
  )
})

export default TextField
export type { TextFieldProps }
