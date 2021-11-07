class FancyLogger {
  static _instance = new FancyLogger()
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
export default fancyLogger
