import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { vi, vitest } from 'vitest'

export const topTen = [
  {
    id: 1,
    name: 'Object Oriented Programming',
    resources: 3
  }
]

export const topics = [
  {
    id: 1,
    name: 'Object Oriented Programming'
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

    default:
      return {} as Response
  }
}

vitest.mock('react-router-dom', () => ({
  useNavigate: vitest.fn()
}))

beforeEach(() => {
  const fetchSpy = vi.spyOn(global, 'fetch')
  fetchSpy.mockImplementation(mockFetch)
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
