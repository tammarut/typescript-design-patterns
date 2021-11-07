import logger from './singleton'

export function logSecondImplementation() {
  logger.printLogCount()
  logger.log('Second file')
  logger.printLogCount()
}
