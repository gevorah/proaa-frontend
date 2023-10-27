export const localStorageUtil = <T>(key: string) => {
  const getItem = () => {
    const item = window.localStorage.getItem(key)
    return JSON.parse(item ?? 'null') as T | null
  }

  const setItem = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return { item: getItem(), setItem }
}
