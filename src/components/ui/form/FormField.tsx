import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form'

import type { FieldProps } from './Field'
import Field from './Field'

type FormFieldProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  rules?: RegisterOptions
  error?: FieldError
} & FieldProps

function FormField<TFormValues extends FieldValues>(
  props: FormFieldProps<TFormValues>
) {
  const { name, as, register, rules, error, className, ...rest } = props

  return (
    <div>
      <Field as={as} {...rest} {...register(name, rules)} />
      {error && <span className="text-red-600">{error.message}</span>}
    </div>
  )
}

export default FormField
