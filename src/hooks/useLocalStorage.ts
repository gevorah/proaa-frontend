export const useLocalStorage = <T>(key: string) => {
  const value = JSON.parse(
    window.localStorage.getItem(key) || 'null'
  ) as T | null

  const set = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return { value, set }
}
