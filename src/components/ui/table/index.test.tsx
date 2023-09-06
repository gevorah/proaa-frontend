import { render } from '@testing-library/react'
import Table from './'
import { topTen } from '@/test-setup'

describe('Table Component', () => {
  const headers = [
    { key: 'name', header: 'Topic' },
    { key: 'resources', header: 'Resource' }
  ]

  it('should render the table component', async () => {
    const component = render(
      <Table columns={headers} data={topTen} isLoading={false} />
    )
    expect(component.getByRole('table')).toBeTruthy()
    expect(component.getByText('Object Oriented Programming')).toBeTruthy()
  })

  it('should render the loading state', async () => {
    const component = render(<Table columns={[]} data={[]} isLoading={true} />)
    expect(component.getByText('Loading...')).toBeTruthy()
  })

  it('should render the empty state', async () => {
    const component = render(
      <Table
        columns={[]}
        data={[]}
        isLoading={false}
        emptyMessage="No Topics"
      />
    )
    expect(component.getByText('No Topics')).toBeTruthy()
  })
})
