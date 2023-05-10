import logger from "./customLogger.js";
// const logger = new CustomLogger();

export default function logFirstImplementation() {
    logger.printLogCount();
    logger.log("first use");
    logger.printLogCount();
}