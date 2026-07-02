const LOG_LEVELS = {
	DEBUG: 0,
	LOG: 1,
	WARN: 2,
	ERROR: 3,
	OFF: 4,
};

const currentLogLevel =
	LOG_LEVELS[import.meta.env.VITE_LOG_LEVEL] ||
	(import.meta.env.DEV ? LOG_LEVELS.LOG : LOG_LEVELS.WARN);

const logger = {
	log: (message, data) => {
		if (currentLogLevel <= LOG_LEVELS.LOG) {
			console.log(
				`[LOG] ${new Date().toISOString()} - ${message}`,
				data || "",
			);
		}
	},
	warn: (message, data) => {
		if (currentLogLevel <= LOG_LEVELS.WARN) {
			console.warn(
				`[WARN] ${new Date().toISOString()} - ${message}`,
				data || "",
			);
		}
	},
	error: (message, data) => {
		if (currentLogLevel <= LOG_LEVELS.ERROR) {
			console.error(
				`[ERROR] ${new Date().toISOString()} - ${message}`,
				data || "",
			);
		}
	},
	debug: (message, data) => {
		if (currentLogLevel <= LOG_LEVELS.DEBUG) {
			console.debug(
				`[DEBUG] ${new Date().toISOString()} - ${message}`,
				data || "",
			);
		}
	},
};

export default logger;
