import { useEffect, useState } from 'react'

import { HttpError } from '@/models/HttpError'
import errorHandler from '@/utils/errorHandler'
import { logger } from '@/utils/logger'

type Fetcher<T, Args extends unknown[]> = (...args: Args) => Promise<T>

type Response<T> = {
  data: T | null
  isLoading: boolean
  error: HttpError | null
}

const useFetch = <T, Args extends unknown[]>(
  fetcher: Fetcher<T, Args>,
  ...args: Args
): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<HttpError | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetcher(...args)
        setData(res)
        logger.info('Fulfilled data fetch')
      } catch (error) {
        logger.info('Rejected data fetch')
        const httpError = errorHandler(error)
        setError(httpError)
      } finally {
        setIsLoading(false)
      }
    }

    logger.info('Running data fetch hook')
    void fetchData()
  }, [fetcher])

  return { data, isLoading, error }
}

export { useFetch }
