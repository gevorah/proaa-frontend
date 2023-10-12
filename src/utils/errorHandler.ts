import { HttpError } from '@/models/HttpError'
import { logger } from '@/utils/logger'

const errorHandler = (error: unknown) => {
  if (error instanceof HttpError) {
    logger.error(`${error.status} - ${error.message}`)
    return error
  }

  logger.error('Uncaught fetch error')
  return new HttpError(400, 'Bad Request')
}

export default errorHandler
