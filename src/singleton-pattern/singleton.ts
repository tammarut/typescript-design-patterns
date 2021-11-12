class FancyLogger {
  private static _instance: FancyLogger
  logs = []
  constructor() {
    if (!FancyLogger._instance) {
      FancyLogger._instance = this
    }
    return FancyLogger._instance
  }

  log(message: any) {
    this.logs.push(message)
    console.log(`👉Fancy: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`)
  }
}

const fancyLogger = new FancyLogger()
const fancyLogger2 = new FancyLogger()
export default fancyLogger
export { fancyLogger2 }
