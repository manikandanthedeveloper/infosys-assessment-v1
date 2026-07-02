import rewardCalculator from "./rewardCalculator";
import dateFormatter from "./dateFormatter";
import { sortByDate, sortByMonthYear, sortByName } from "./sortData";

function rewardAggregator(transactions) {
	const result = transactions.reduce(
		(acc, transaction) => {
			const rewardPoints = rewardCalculator(transaction.amount);

			const { month, year, MmYyyy } = dateFormatter(
				transaction.purchaseDate,
			);

			// Transactions Table
			acc.transactions.push({
				...transaction,
				rewardPoints,
			});

			// Monthly Rewards
			const monthlyKey = `${transaction.customerId}-${MmYyyy}`;
			if (!acc.monthlyRewards[monthlyKey]) {
				acc.monthlyRewards[monthlyKey] = {
					id: monthlyKey,
					customerId: transaction.customerId,
					firstName: transaction.firstName,
					lastName: transaction.lastName,
					month: month.name,
					monthNumber: month.number,
					year,
					rewardPoints: 0,
				};
			}
			acc.monthlyRewards[monthlyKey].rewardPoints += rewardPoints;

			// Total Rewards
			const totalKey = transaction.customerId;

			if (!acc.totalRewards[totalKey]) {
				acc.totalRewards[totalKey] = {
					customerId: transaction.customerId,
					firstName: transaction.firstName,
					lastName: transaction.lastName,
					rewardPoints: 0,
				};
			}
			acc.totalRewards[totalKey].rewardPoints += rewardPoints;
			acc.customerIds.add(transaction.customerId);
			acc.totalRewardPoints += rewardPoints;
			acc.months.add(`${year}-${month.number}`);
			return acc;
		},
		{
			transactions: [],
			monthlyRewards: {},
			totalRewards: {},
			customerIds: new Set(),
			months: new Set(),
			totalRewardPoints: 0,
		},
	);

	return {
		rewardTransactions: sortByDate(result.transactions, "purchaseDate"),
		monthlyRewards: sortByMonthYear(Object.values(result.monthlyRewards)),
		totalRewards: sortByName(
			Object.values(result.totalRewards),
			"firstName",
		),
		stats: {
			customers: result.customerIds.size,
			transactions: result.transactions.length,
			rewardsAwarded: result.totalRewardPoints,
			months: result.months.size,
		},
	};
}

export default rewardAggregator;
