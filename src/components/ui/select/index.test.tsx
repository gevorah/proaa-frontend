import { render } from '@testing-library/react'

import Select from './'

describe('Select Component', () => {
  it('should render the select component', async () => {
    const component = render(<Select name="test" />)
    expect(component.getByRole('combobox')).toBeTruthy()
  })

  it('should correctly set placeholder as default option', async () => {
    const component = render(<Select name="test" placeholder="Select" />)
    expect(component.getByRole('option', { name: 'Select' })).toBeTruthy()
  })

  it('should display the correct number of options', () => {
    const component = render(
      <Select
        name="test"
        placeholder="Select"
        options={[
          { label: '1', value: 1 },
          { label: '2', value: 2 }
        ]}
      />
    )

    expect(component.getAllByRole('option').length).toBe(3)
  })
})
