import { HttpError } from '@/models/HttpError'

const fetcher = async <T>(
  resource: string,
  options?: RequestInit,
  authentication?: boolean
) => {
  const topic = import.meta.env.VITE_API_TOPIC_URL as string
  const auth = import.meta.env.VITE_API_AUTH_URL as string

  const url = authentication ? auth : topic
  const headers = { ...options?.headers, 'Content-Type': 'application/json' }

  const res = await fetch(url + resource, { ...options, headers })
  const json = await res.json()

  if (!res.ok) throw new HttpError(json.status, json.message)

  return json satisfies T
}

export default fetcher
