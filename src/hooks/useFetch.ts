import errorHandler from '@/utils/errorHandler'
import { logger } from '@/utils/logger'
import { useEffect, useState } from 'react'

type Response<T> = {
  data: T | null
  isLoading: boolean
  error: unknown
}

const useFetch = <T>(fetcher: () => Promise<T>): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetcher()
        setData(res)
        logger.info('Fulfilled data fetch')
      } catch (error) {
        logger.info('Rejected data fetch')
        errorHandler(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    logger.info('Running data fetch hook')
    void fetchData()
  }, [fetcher])

  return { data, isLoading, error }
}

export default useFetch
