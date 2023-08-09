import errorHandler from '@utils/errorHandler'
import { logger } from '@utils/logger'
import { useEffect, useState } from 'react'

type Response<T> = {
  data?: T
  isLoading?: boolean
  error?: unknown
}

const useDataFetch = <T>(fetcher: () => Promise<T>): Response<T> => {
  const [data, setData] = useState<T>(null!)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null!)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetcher()
        setData(res)
      } catch (error) {
        errorHandler(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    logger.info('data fetch hook')
    void fetchData()
  }, [fetcher])

  return { data, isLoading, error }
}

export default useDataFetch
