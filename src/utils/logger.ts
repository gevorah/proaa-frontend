import { TransformableInfo } from 'logform'
import { createLogger } from 'winston'
import TransportStream from 'winston-transport'

type LogLevel = 'error' | 'warn' | 'info' | 'debug'
class BrowserConsole extends TransportStream {
  private levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
  }
  private colors = {
    error: 'red',
    warn: 'orange',
    info: 'darkturquoise',
    debug: 'blue'
  }
  constructor(options: TransportStream.TransportStreamOptions) {
    super(options)

    const isLevel = options.level && this.levels.hasOwnProperty(options.level)
    this.level = isLevel ? options.level : 'info'
  }
  log(info: TransformableInfo, next: () => void) {
    setImmediate((): void => {
      this.emit('logged', info)
    })

    const defaultColor = 'color: inherit'

    console[info.level as LogLevel](
      `%c[%c${info.level.toUpperCase()}%c]:`,
      defaultColor,
      `color: ${this.colors[info.level as LogLevel]};`,
      defaultColor,
      info.message
    )

    next()
  }
}

export const logger = createLogger({
  transports: [
    new BrowserConsole({
      silent: true,
      level: 'info'
    })
  ]
})

if (import.meta.env.DEV) {
  logger.transports.forEach(transport => (transport.silent = false))
}
