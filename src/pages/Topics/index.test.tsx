import { render } from '@testing-library/react'

import Topics from './'

describe('My Topics Page', () => {
  it('should render the topics page', async () => {
    const component = render(<Topics />)
    expect(component.getByText('My Topics')).toBeTruthy()
    expect(component.getByText('New Topic')).toBeTruthy()
    expect(await component.findByRole('table')).toBeTruthy()
  })
})
