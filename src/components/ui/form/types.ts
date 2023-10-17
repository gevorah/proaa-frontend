import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form'

type FormFieldProps<TFormValues extends FieldValues, FieldProps> = {
  name: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  rules?: RegisterOptions
  error?: FieldError
} & Omit<FieldProps, 'name'>

export type { FormFieldProps }
