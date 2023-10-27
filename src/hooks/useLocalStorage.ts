import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'

import { localStorageUtil } from '@/utils/localStorage'

type SetValue<T> = Dispatch<SetStateAction<T>>

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const { item, setItem } = localStorageUtil<T>(key)

  const getValue = useCallback((): T => {
    return item ?? initialValue
  }, [initialValue, key])

  const [value, setValue] = useState<T>(getValue)

  const setValueExt: SetValue<T> = val => {
    const newValue = val instanceof Function ? val(value) : val
    setItem(newValue)
    setValue(newValue)
  }

  useEffect(() => {
    setValue(getValue())
  }, [])

  return [value, setValueExt]
}
