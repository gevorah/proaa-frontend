import { fireEvent, render } from '@testing-library/react'

import SignIn from './'

describe('Sign In Page', () => {
  it('should render the sign-in page', async () => {
    const component = render(<SignIn />)

    expect(component.getByText('Sign in')).toBeTruthy()
    expect(component.getByPlaceholderText('Email')).toBeTruthy()
    expect(component.getByPlaceholderText('Password')).toBeTruthy()
  })

  it('should show errors when the form is submitted without data', async () => {
    const component = render(<SignIn />)

    const button = component.getByRole('button')
    fireEvent.click(button)

    expect(await component.findByText('Email is required')).toBeTruthy()
    expect(await component.findByText('Password is required')).toBeTruthy()
  })
})
