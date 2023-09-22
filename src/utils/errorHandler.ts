import { HttpError } from '@/models/HttpError'
import { logger } from '@/utils/logger'

const errorHandler = (error: unknown) => {
  if (error instanceof HttpError) {
    logger.error(`${error.status} - ${error.message}`)
  }
  logger.error('Uncaught fetch error')
}

export default errorHandler
