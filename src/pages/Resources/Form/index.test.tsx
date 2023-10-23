import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { topic } from '@/test-setup'

import ResourcePage from '../Form'

const router = vi.hoisted(() => ({
  useNavigate: vi.fn(),
  useParams: vi.fn(() => ({ id: '1' }))
}))

vi.mock('react-router-dom', () => router)

describe('Resource Page', () => {
  describe('Create Mode', () => {
    it('should render the resource page in create mode', async () => {
      const component = render(<ResourcePage mode="create" />)

      expect(component.getByText('Save')).toBeTruthy()
      expect(component.getByPlaceholderText('Description')).toBeTruthy()
      expect(component.getByPlaceholderText('Url')).toBeTruthy()
      expect(
        component.getByRole('option', { name: 'Select a Topic' })
      ).toBeTruthy()
    })

    it('should show errors when the form is submitted without data', async () => {
      const component = render(<ResourcePage mode="create" />)

      const button = component.getByRole('button')
      await userEvent.click(button)

      expect(await component.findByText('Description is required')).toBeTruthy()
      expect(await component.findByText('Url is required')).toBeTruthy()
      expect(await component.findByText('Topic is required')).toBeTruthy()
    })

    it('should show error when the form is submitted with invalid topic', async () => {
      const component = render(<ResourcePage mode="create" />)

      const descriptionField = component.getByPlaceholderText('Description')
      await userEvent.type(descriptionField, 'Testing')

      const urlField = component.getByPlaceholderText('Url')
      await userEvent.type(urlField, 'http://test.com')

      const topicField = component.getByRole('combobox')
      const topicOption = component.getByRole('option', { name: topic.name })
      topicOption.setAttribute('value', '10')
      await userEvent.selectOptions(topicField, topicOption)

      const button = component.getByRole('button')
      await userEvent.click(button)

      expect(await component.findByText('Topic is not valid')).toBeTruthy()
    })
  })

  describe('Edit Mode', () => {
    it('should render the resource page in edit mode', async () => {
      const component = render(<ResourcePage mode="edit" />)

      expect(component.getByPlaceholderText('Description')).toBeTruthy()
      expect(component.getByPlaceholderText('Url')).toBeTruthy()
      expect(
        component.getByRole('option', { name: 'Select a Topic' })
      ).toBeTruthy()
    })

    it('should show error page when id is not valid', async () => {
      router.useParams.mockReturnValueOnce({ id: 'x' })

      const component = render(<ResourcePage mode="edit" />)

      expect(await component.findByText('Resource Not Found')).toBeTruthy()
    })

    it('should show errors when the form is submitted without data', async () => {
      const component = render(<ResourcePage mode="edit" />)

      const descriptionField = component.getByPlaceholderText('Description')
      await userEvent.type(descriptionField, '{Backspace>99}')

      const urlField = component.getByPlaceholderText('Url')
      await userEvent.type(urlField, '{Backspace>99}')

      const resourceField = component.getByRole('combobox')
      const resourceOption = component.getByRole('option', {
        name: 'Select a Topic'
      })
      await userEvent.selectOptions(resourceField, resourceOption)

      const button = component.getByRole('button')
      await userEvent.click(button)

      expect(await component.findByText('Description is required')).toBeTruthy()
      expect(await component.findByText('Url is required')).toBeTruthy()
      expect(await component.findByText('Topic is required')).toBeTruthy()
    })
  })
})
