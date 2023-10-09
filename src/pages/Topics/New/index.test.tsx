import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import NewTopic from './'

describe('New Topic Page', () => {
  it('should render the new topic page', async () => {
    const component = render(<NewTopic />)

    expect(component.getByText('Save')).toBeTruthy()
    expect(component.getByPlaceholderText('Topic Name')).toBeTruthy()
  })

  it('should show errors when the form is submitted without data', async () => {
    const component = render(<NewTopic />)

    const button = component.getByRole('button')
    await userEvent.click(button)

    expect(await component.findByText('Topic Name is required')).toBeTruthy()
  })
})
