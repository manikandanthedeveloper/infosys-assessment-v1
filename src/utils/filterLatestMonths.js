import { MONTHS_TO_INCLUDE } from "../constants";
import dateFormatter from "./dateFormatter";
function filterLatestMonths(transactions) {
	const latestMonths = [
		...new Set(
			transactions
				.map((transaction) => {
					const { yyyyMm } = dateFormatter(transaction.purchaseDate);

					return yyyyMm;
				})
				.sort(),
		),
	].slice(MONTHS_TO_INCLUDE * -1);

	return transactions.filter((transaction) => {
		const { yyyyMm } = dateFormatter(transaction.purchaseDate);

		return latestMonths.includes(yyyyMm);
	});
}

export default filterLatestMonths;
