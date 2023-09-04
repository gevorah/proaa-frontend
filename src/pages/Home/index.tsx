import PublicTemplate from '@components/layouts/PublicTemplate'
import useFetch from '@hooks/useFetch'
import { top10Topics } from '@services/TopicService'
import { logger } from '@utils/logger'
import { useEffect } from 'react'

function Home() {
  const { data: topics, isLoading } = useFetch(top10Topics)
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
              <th scope="col">Topic</th>
              <th scope="col">Resources</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={2}>Loading...</td>
              </tr>
            ) : topics?.length === 0 ? (
              <tr>
                <td colSpan={2}>No Topics</td>
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
