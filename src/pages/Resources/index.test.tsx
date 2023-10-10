import { render } from '@testing-library/react'

import Resources from './'

describe('My Resources Page', () => {
  it('should render the resources page', async () => {
    const component = render(<Resources />)
    expect(component.getByText('My Resources')).toBeTruthy()
    expect(component.getByText('New Resource')).toBeTruthy()
    expect(await component.findByRole('table')).toBeTruthy()
  })
})
