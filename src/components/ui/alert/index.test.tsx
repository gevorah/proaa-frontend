import { render } from '@testing-library/react'

import Alert from './'

describe('Alert Component', () => {
  it('should render the alert component', async () => {
    const component = render(<Alert title="Test" description="Something" />)
    expect(component.getByText('Test')).toBeTruthy()
    expect(component.getByText('Something')).toBeTruthy()
  })
})
