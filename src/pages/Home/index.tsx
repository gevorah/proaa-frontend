import PublicTemplate from '@/components/layouts/PublicTemplate'
import TopTenTable from '@/components/ui/TopTenTable'
import useFetch from '@/hooks/useFetch'
import { top10Topics } from '@/services/TopicService'
import { logger } from '@/utils/logger'
import { useEffect } from 'react'

function Home() {
  const { data: topics, isLoading } = useFetch(top10Topics)

  useEffect(() => {
    logger.info('Running home page')
  }, [])

  return (
    <PublicTemplate>
      <section>
        <h1>Top ten topics</h1>
        <TopTenTable data={topics} isLoading={isLoading} />
      </section>
    </PublicTemplate>
  )
}

export default Home
