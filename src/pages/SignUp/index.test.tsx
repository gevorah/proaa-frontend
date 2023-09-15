import { render } from '@testing-library/react'

import SignUp from './'

describe('SignUp Page', () => {
  it('should render the sign-up page', async () => {
    const component = render(<SignUp />)
    expect(component.getByText('Sign up')).toBeTruthy()
  })
})
