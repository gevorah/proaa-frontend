import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import TopicPage from '../Form'

describe('New Topic Page', () => {
  it('should render the new topic page', async () => {
    const component = render(<TopicPage mode="create" />)

    expect(component.getByText('Save')).toBeTruthy()
    expect(component.getByPlaceholderText('Topic Name')).toBeTruthy()
  })

  it('should show errors when the form is submitted without data', async () => {
    const component = render(<TopicPage mode="create" />)

    const button = component.getByRole('button')
    await userEvent.click(button)

    expect(await component.findByText('Topic Name is required')).toBeTruthy()
  })
})
