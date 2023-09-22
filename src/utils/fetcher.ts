import { HttpError } from '@/models/HttpError'

const fetcher = async <T>(
  resource: string,
  options?: RequestInit,
  authentication?: boolean
) => {
  const topic = import.meta.env.VITE_API_TOPIC_URL
  const auth = import.meta.env.VITE_API_AUTH_URL

  const url = authentication ? auth : topic
  const headers = { 'Content-Type': 'application/json', ...options?.headers }

  const res = await fetch(url + resource, { ...options, headers })
  const json = await res.json()

  if (!res.ok) throw new HttpError(json.status, json.message)

  return json as T
}

export default fetcher
