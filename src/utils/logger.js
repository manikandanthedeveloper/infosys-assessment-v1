import { ENABLE_LOG, LOG_LEVEL } from "../constants";

const LOG_LEVELS = {
	DEBUG: 0,
	INFO: 1,
	WARN: 2,
	ERROR: 3,
	OFF: 4,
};

const currentLogLevel = LOG_LEVELS[LOG_LEVEL.toUpperCase()] ?? LOG_LEVELS.INFO;

const logger = {
	debug: (...args) => {
		if (ENABLE_LOG && currentLogLevel <= LOG_LEVELS.DEBUG) {
			console.debug("[DEBUG]", ...args);
		}
	},

	info: (...args) => {
		if (ENABLE_LOG && currentLogLevel <= LOG_LEVELS.INFO) {
			console.info("[INFO]", ...args);
		}
	},

	warn: (...args) => {
		if (ENABLE_LOG && currentLogLevel <= LOG_LEVELS.WARN) {
			console.warn("[WARN]", ...args);
		}
	},

	error: (...args) => {
		if (ENABLE_LOG && currentLogLevel <= LOG_LEVELS.ERROR) {
			console.error("[ERROR]", ...args);
		}
	},
};

export default logger;
