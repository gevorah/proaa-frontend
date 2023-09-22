import { logger } from '@/utils/logger'

import './index.css'

function Maintenance() {
  logger.info('Running...')
  return (
    <div className="maintenance">
      <h1>Training Library is currently down for maintenance.</h1>
    </div>
  )
}

export default Maintenance
