import { render } from '@testing-library/react'
import Home from './'

describe('Home Page', () => {
  it('should render the home page', async () => {
    const component = render(<Home />)
    expect(component.getByText('Top ten topics')).toBeTruthy()
    expect(await component.findByRole('table')).toBeTruthy()
  })
})
