import logger from "../utils/logger";

export const fetchTransactions = async () => {
	try {
		const response = await fetch("/data/transactions.json");

		if (!response.ok) {
			throw new Error("Unable to fetch transactions");
		}

		return response.json();
	} catch (error) {
		logger.error("Failed to fetch transactions", error.message);
		throw error;
	}
};
