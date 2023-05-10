class CustomLogger {
  constructor() {
    this.logs = []
  }

  log(message) {
    this.logs.push(message)
    console.log(`CUSTOM: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

const logger = new CustomLogger();
export default logger;
