import { ForwardedRef, forwardRef } from 'react'

import type { SelectProps } from '@/components/ui/select'
import Select from '@/components/ui/select'
import type { TextFieldProps } from '@/components/ui/textfield'
import TextField from '@/components/ui/textfield'

type FieldProps =
  | (TextFieldProps & { as?: 'textfield' })
  | (SelectProps & { as: 'select' })

type FieldRef = HTMLInputElement | HTMLSelectElement

const Field = forwardRef<FieldRef, FieldProps>((props, ref) => {
  if (props.as === 'select') {
    const selectRef = ref as ForwardedRef<HTMLSelectElement>
    return <Select ref={selectRef} {...props} />
  }

  const textfieldRef = ref as ForwardedRef<HTMLInputElement>
  return <TextField ref={textfieldRef} {...props} />
})

export default Field
export type { FieldProps }
