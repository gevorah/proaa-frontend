export const useLocalStorage = <T>(prefix: string) => {
  return {
    get: (key: string): T | null => {
      return JSON.parse(
        window.localStorage.getItem(`${prefix}-${key}`) || 'null'
      )
    },
    set: (key: string, value: T) => {
      window.localStorage.setItem(`${prefix}-${key}`, JSON.stringify(value))
    }
  }
}
