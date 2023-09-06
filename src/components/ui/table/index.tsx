import './index.scss'
import Loading from '@/components/ui/loading'

type Column = {
  key: string
  header: string
}

type TableProps<T> = {
  columns: Column[]
  data: T[]
  isLoading: boolean
  emptyMessage?: string
  className?: string
}

function Table<T>(props: TableProps<T>) {
  const { columns, data, isLoading, emptyMessage = 'No data' } = props

  if (isLoading) return <Loading />

  if (!data.length) return <div>{emptyMessage}</div>

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th scope="col" key={`header-${index}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={`row-${i}`}>
            {columns.map((column, j) => (
              <td key={`cell-${j}`}>
                <>{row[column.key as keyof T]}</>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
