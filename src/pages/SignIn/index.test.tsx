import { render } from '@testing-library/react'

import SignIn from './'

describe('Sign In Page', () => {
  it('should render the sign-in page', async () => {
    const component = render(<SignIn />)
    expect(component.getByText('Sign in')).toBeTruthy()
  })
})
