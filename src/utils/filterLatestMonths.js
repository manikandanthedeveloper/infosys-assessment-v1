function filterLatestMonths(transactions, monthCount) {
	const latestMonths = [
		...new Set(
			transactions
				.map((transaction) => {
					const date = new Date(transaction.purchaseDate);

					return `${date.getFullYear()}-${String(
						date.getMonth() + 1,
					).padStart(2, "0")}`;
				})
				.sort(),
		),
	].slice(-monthCount);

	return transactions.filter((transaction) => {
		const date = new Date(transaction.purchaseDate);

		const key = `${date.getFullYear()}-${String(
			date.getMonth() + 1,
		).padStart(2, "0")}`;

		return latestMonths.includes(key);
	});
}

export default filterLatestMonths;
