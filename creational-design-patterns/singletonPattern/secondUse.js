import logger from "./customLogger.js";
// const logger = new CustomLogger();

export default function logSecondImplementation (){
    logger.printLogCount();
    logger.log("second use");
    logger.printLogCount();
}