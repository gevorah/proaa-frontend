import { render } from '@testing-library/react'

import Loading from './'

describe('Loading Component', () => {
  it('should render the loading component', async () => {
    const component = render(<Loading />)
    expect(component.getByText('Loading...')).toBeTruthy()
  })
})
