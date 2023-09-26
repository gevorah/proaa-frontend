import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { signIn } from '@/services/AuthService'

import SignIn from './'

vi.mock('@/services/AuthService', () => ({
  signIn: vi.fn(
    () =>
      new Promise(() => {
        throw { message: 'Error' }
      })
  )
}))

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
    await userEvent.click(button)

    expect(await component.findByText('Email is required')).toBeTruthy()
    expect(await component.findByText('Password is required')).toBeTruthy()
  })

  it('should show error when the service throws error', async () => {
    const component = render(<SignIn />)

    const emailField = component.getByPlaceholderText('Email')
    await userEvent.type(emailField, 'pandorah@dark.com')

    const passwordField = component.getByPlaceholderText('Password')
    await userEvent.type(passwordField, 'password123')

    const button = component.getByRole('button')
    await userEvent.click(button)

    expect(signIn).toBeCalled()
    expect(await component.findByText('Error')).toBeTruthy()
  })
})
