import { fireEvent, render } from '@testing-library/react'

import SignUp from './'

describe('Sign Up Page', () => {
  it('should render the sign-up page', async () => {
    const component = render(<SignUp />)

    expect(component.getByText('Sign up')).toBeTruthy()
    expect(component.getByPlaceholderText('Email')).toBeTruthy()
    expect(component.getByPlaceholderText('Password')).toBeTruthy()
  })

  it('should show errors when the form is submitted without data', async () => {
    const component = render(<SignUp />)

    const button = component.getByRole('button')
    fireEvent.click(button)

    expect(await component.findByText('Email is required')).toBeTruthy()
    expect(await component.findByText('Password is required')).toBeTruthy()
  })
})
