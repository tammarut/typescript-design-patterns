import logger from './singleton'
import { fancyLogger2 } from './singleton'

export function logFirstImplementation() {
  logger.printLogCount()
  logger.log('First file')
  logger.printLogCount()
  if (logger === fancyLogger2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}
