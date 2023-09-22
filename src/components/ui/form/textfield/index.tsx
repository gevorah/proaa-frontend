import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form'

import TextField from '@/components/ui/textfield'
import type { TextFieldProps } from '@/components/ui/textfield'

type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  rules?: RegisterOptions
  register: UseFormRegister<TFormValues>
  error?: FieldError
} & Omit<TextFieldProps, 'name'>

function FormTextField<TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
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
