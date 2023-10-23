import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form'

import type { FieldProps } from './Field'
import Field from './Field'
import './index.css'

type FormFieldProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  label?: string
  register: UseFormRegister<TFormValues>
  rules?: RegisterOptions
  error?: FieldError
} & FieldProps

function FormField<TFormValues extends FieldValues>(
  props: FormFieldProps<TFormValues>
) {
  const { as, name, label, register, rules, error, className, ...rest } = props

  return (
    <div className="form-field">
      {label && <label>{label}</label>}
      <Field as={as} {...rest} {...register(name, rules)} />
      {error && <span className="error">{error.message}</span>}
    </div>
  )
}

export default FormField
