import { render } from '@testing-library/react'

import TextField from './'

describe('TextField Component', () => {
  it('should render the textfield component', async () => {
    const component = render(<TextField type="text" name="test" />)
    expect(component.getByRole('textbox')).toBeTruthy()
  })
})
