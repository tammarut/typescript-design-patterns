import logger from './singleton'

export function logFirstImplementation() {
  logger.printLogCount()
  logger.log('First file')
  logger.printLogCount()
}
