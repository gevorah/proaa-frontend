import { vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from './'

beforeEach(() => {
  vi.spyOn(window, 'fetch').mockImplementation(mockFetch)
})

afterEach(() => {
  vi.restoreAllMocks()
})

it('should render the home page', async () => {
  const component = render(<Home />)
  expect(component.getByText('Top ten topics')).toBeTruthy()
  expect(await component.findByRole('table')).toBeTruthy()
  expect(await component.findByText('Object Oriented Programming')).toBeTruthy()
})

const data = [
  {
    id: 1,
    name: 'Object Oriented Programming',
    resources: 3
  }
]

const mockFetch = async (
  _input: URL | RequestInfo,
  _init?: RequestInit | undefined
) => {
  const res = {
    ok: true,
    status: 200,
    json: async () => data
  } as Response
  return res
}
