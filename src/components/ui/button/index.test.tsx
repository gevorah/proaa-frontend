import { render } from '@testing-library/react'

import Button from './'

describe('Button Component', () => {
  it('should render the button component', async () => {
    const component = render(<Button>Test</Button>)
    expect(component.getByRole('button')).toBeTruthy()
    expect(component.getByText('Test')).toBeTruthy()
  })
})
