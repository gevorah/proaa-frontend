import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { vi } from 'vitest'

export const topTen = [
  {
    id: 1,
    name: 'Object Oriented Programming',
    resources: 3
  }
]

export const topic = {
  id: 1,
  name: 'Object Oriented Programming'
}

export const topics = [topic]

export const resources = [
  {
    id: 1,
    descriptionName: 'Object and Class',
    url: ''
  }
]

const mockFetch = async (
  input: URL | RequestInfo,
  _init?: RequestInit | undefined
) => {
  const url = import.meta.env.VITE_API_BASE_URL as string
  switch (input) {
    case url + '/topics/top-ten':
      return {
        ok: true,
        status: 200,
        json: async () => topTen
      } as Response
    case url + '/topics':
      return {
        ok: true,
        status: 200,
        json: async () => topics
      } as Response
    case url + '/topics/1':
      return {
        ok: true,
        status: 200,
        json: async () => topic
      } as Response
    case url + '/resources':
      return {
        ok: true,
        status: 200,
        json: async () => resources
      } as Response
    default:
      return {} as Response
  }
}

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}))

beforeEach(() => {
  const fetchSpy = vi.spyOn(global, 'fetch')
  fetchSpy.mockImplementation(mockFetch)
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
