import Loading from '@/components/ui/loading'

import './index.css'

type Column = {
  key: string
  header: string
  link?: boolean
}

type TableProps<T> = {
  columns: Column[]
  data: T[]
  isLoading: boolean
  emptyMessage?: string
  className?: string
}

function Table<T>(props: TableProps<T>) {
  const {
    columns,
    data,
    isLoading,
    emptyMessage = 'No data',
    className
  } = props

  if (isLoading) return <Loading />

  if (!data.length) return <div>{emptyMessage}</div>

  return (
    <table className={className}>
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
            {columns.map((column, j) => {
              const inner = row[column.key as keyof T]
              const path = window.location.pathname
              return (
                <td key={`cell-${j}`}>
                  {column.link ? (
                    <a className="link" href={`${path}/edit/${inner}`}>
                      <>{inner}</>
                    </a>
                  ) : (
                    <>{inner}</>
                  )}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
