import { TopicsTop } from '@/models/Topic'
import Loading from './Loading'

type TableProps = {
  data: TopicsTop | null
  isLoading: boolean
}

function TopTenTable(props: TableProps) {
  const { data, isLoading } = props

  if (isLoading) return <Loading />

  if (!data?.length) return <div>No Topics</div>

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Topic</th>
          <th scope="col">Resources</th>
        </tr>
      </thead>
      <tbody>
        {data.map(topic => (
          <tr key={topic.id}>
            <td>{topic.name}</td>
            <td>{topic.resources}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TopTenTable
