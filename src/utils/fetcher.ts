const fetcher = async <T>(url: string, options?: RequestInit) => {
  const res = await fetch(url, options)
  const json = (await res.json()) as T
  return json
}

export default fetcher
