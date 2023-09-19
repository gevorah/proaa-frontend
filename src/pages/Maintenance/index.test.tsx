import { render } from '@testing-library/react'
import Maintenance from './'

it('should render the maintenance page', async () => {
  const component = render(<Maintenance />)
  expect(
    component.getByText('Training Library is currently down for maintenance.')
  ).toBeTruthy()
})
