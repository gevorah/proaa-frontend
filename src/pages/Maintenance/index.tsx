import { logger } from '@/utils/logger'

function Maintenance() {
  logger.info('Running...')
  return (
    <div className="m-6">
      <span className="text-xl">
        Training Library is currently down for maintenance.
      </span>
    </div>
  )
}

export default Maintenance
