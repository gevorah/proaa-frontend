import type { FieldValues } from 'react-hook-form'

import { FormFieldProps } from '@/components/ui/form/types'
import TextField from '@/components/ui/textfield'
import type { TextFieldProps } from '@/components/ui/textfield'

function FormTextField<TFormValues extends FieldValues>(
  props: FormFieldProps<TFormValues, TextFieldProps>
) {
  const { name, rules, register, error, className, ...rest } = props

  return (
    <div>
      <TextField {...rest} {...register(name, rules)} />
      {error && <span className="text-red-600">{error.message}</span>}
    </div>
  )
}

export default FormTextField
