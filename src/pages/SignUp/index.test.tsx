import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { signUp } from '@/services/AuthService'

import SignUp from './'

vi.mock('@/services/AuthService', () => ({
  signUp: vi.fn(
    () =>
      new Promise(() => {
        throw { message: 'Error' }
      })
  )
}))

describe('Sign Up Page', () => {
  it('should render the sign-up page', async () => {
    const component = render(<SignUp />)

    expect(component.getByText('Sign up')).toBeTruthy()
    expect(component.getByPlaceholderText('Email')).toBeTruthy()
    expect(component.getByPlaceholderText('Password')).toBeTruthy()
  })

  it('should show errors when the form is submitted without data', async () => {
    const component = render(<SignUp />)

    const button = component.getByRole('button', { name: 'Sign up' })
    await userEvent.click(button)

    expect(await component.findByText('Email is required')).toBeTruthy()
    expect(await component.findByText('Password is required')).toBeTruthy()
  })

  it('should show error when the service throws error', async () => {
    const component = render(<SignUp />)

    const nameField = component.getByPlaceholderText('Name')
    await userEvent.type(nameField, 'pandorah')

    const emailField = component.getByPlaceholderText('Email')
    await userEvent.type(emailField, 'pandorah@dark.com')

    const passwordField = component.getByPlaceholderText('Password')
    await userEvent.type(passwordField, 'password123')

    const button = component.getByRole('button', { name: 'Sign up' })
    await userEvent.click(button)

    expect(signUp).toBeCalled()
    expect(await component.findByText('Error')).toBeTruthy()
  })
})
