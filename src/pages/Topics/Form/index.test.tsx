import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import TopicPage from '../Form'

const router = vi.hoisted(() => ({
  useNavigate: vi.fn(),
  useParams: vi.fn(() => ({ id: '1' }))
}))

vi.mock('react-router-dom', () => router)

describe('Topic Page', () => {
  describe('Create Mode', () => {
    it('should render the topic page in create mode', async () => {
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

  describe('Edit Mode', () => {
    it('should render the topic page in edit mode', async () => {
      const component = render(<TopicPage mode="edit" />)

      expect(component.getByText('Save')).toBeTruthy()
      expect(component.getByPlaceholderText('Topic Name')).toBeTruthy()
    })

    it('should show error page when id is not valid', async () => {
      router.useParams.mockReturnValueOnce({ id: 'x' })

      const component = render(<TopicPage mode="edit" />)

      expect(await component.findByText('Topic Not Found')).toBeTruthy()
    })

    it('should show errors when the form is submitted without data', async () => {
      const component = render(<TopicPage mode="edit" />)

      const nameField = component.getByPlaceholderText('Topic Name')
      await userEvent.type(nameField, '{Backspace>99}')

      const button = component.getByRole('button')
      await userEvent.click(button)

      expect(await component.findByText('Topic Name is required')).toBeTruthy()
    })
  })
})
