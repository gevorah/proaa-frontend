import { useEffect } from 'react'

import PublicTemplate from '@/components/layouts/PublicTemplate'
import TopTenTable from '@/components/ui/table'
import { useFetch } from '@/hooks/useFetch'
import { top10Topics } from '@/services/TopicService'
import { logger } from '@/utils/logger'

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
        <div className="mx-auto my-12">
          <h1 className="mb-6 text-3xl">Top ten topics</h1>
          <TopTenTable
            columns={headers}
            data={topics || []}
            isLoading={isLoading}
            emptyMessage="No Topics"
          />
        </div>
      </section>
    </PublicTemplate>
  )
}

export default Home
