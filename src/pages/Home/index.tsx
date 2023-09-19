import { useEffect } from 'react'

import PublicTemplate from '@/components/layouts/PublicTemplate'
import TopTenTable from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { top10Topics } from '@/services/TopicService'
import { logger } from '@/utils/logger'

import './index.css'

function Home() {
  const { data: topics, isLoading } = useFetch(top10Topics)

  const headers = [
    { key: 'name', header: 'Topic' },
    { key: 'resources', header: 'Resource' }
  ]

  useEffect(() => {
    logger.info('Running home page')
  }, [])

  return (
    <PublicTemplate>
      <section>
        <h1 className="home-title">Top ten topics</h1>
        <TopTenTable
          columns={headers}
          data={topics || []}
          isLoading={isLoading}
          emptyMessage="No Topics"
        />
      </section>
    </PublicTemplate>
  )
}

export default Home
