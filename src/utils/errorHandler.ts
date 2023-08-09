import { logger } from '@utils/logger'

type Status = {
  code: number
  name: string
  description: string
}

class HttpError extends Error {
  status: Status

  constructor(status: Status) {
    super(status.name)
    this.status = status
  }
}

const errorHandler = (error: unknown) => {
  if (error instanceof HttpError) {
    switch (error.status.code) {
      case 401:
        logger.error('Unauthorized')
        break
      case 500:
        logger.error('Internal Server Error')
        break
      default:
        throw new Error('Unhandled fetch error: ' + error.message)
    }
  }
  throw new Error('Uncaught fetch error')
}

export default errorHandler
