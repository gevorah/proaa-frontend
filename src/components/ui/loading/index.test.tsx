import { render } from '@testing-library/react'
import Loading from './'

describe('Loading Component', () => {
  it('should render the maintenance page', async () => {
    const component = render(<Loading />)
    expect(component.getByText('Loading...')).toBeTruthy()
  })
})
