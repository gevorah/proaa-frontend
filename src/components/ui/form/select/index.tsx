import type { FieldValues } from 'react-hook-form'

import { FormFieldProps } from '@/components/ui/form/types'
import Select from '@/components/ui/select'
import type { SelectProps } from '@/components/ui/select'

function FormSelect<TFormValues extends FieldValues>(
  props: FormFieldProps<TFormValues, SelectProps>
) {
  const { name, rules, register, error, className, ...rest } = props

  return (
    <div>
      <Select {...rest} {...register(name, rules)} />
      {error && <span className="text-red-600">{error.message}</span>}
    </div>
  )
}

export default FormSelect
