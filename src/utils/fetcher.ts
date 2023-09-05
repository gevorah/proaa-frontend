


const fetcher = async <T>(resource: string, options?: RequestInit) => {
  const url = import.meta.env.VITE_API_BASE_URL as string
  const res = await fetch(url + resource, options)
  const json = (await res.json()) as T
  return json
}

export default fetcher
