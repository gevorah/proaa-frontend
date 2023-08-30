import PublicTemplate from '@components/layouts/PublicTemplate'
import useDataFetch from '@hooks/useDataFetch'
import { top10Topics } from '@services/TopicService'
import { logger } from '@utils/logger'
import { useEffect } from 'react'

function Home() {
  const { data: topics, isLoading } = useDataFetch(top10Topics)
  useEffect(() => {
    logger.info('Running home page')
  }, [])
  return (
    <PublicTemplate>
      <section className="mx-3 my-6 flex flex-col gap-6 px-9">
        <h1 className="text-3xl font-semibold">Top ten topics</h1>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td></td>
                <td></td>
              </tr>
            ) : (
              topics?.map(({ id, name, resources }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{resources}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </PublicTemplate>
  )
}

export default Home
