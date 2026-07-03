import rewardAggregator from "../utils/rewardAggregator";

const transactions = [
	{
		id: 1,
		customerId: 1,
		firstName: "John",
		lastName: "Doe",
		purchaseDate: "2024-01-15",
		product: "Laptop",
		amount: 120,
	},
	{
		id: 2,
		customerId: 1,
		firstName: "John",
		lastName: "Doe",
		purchaseDate: "2024-01-20",
		product: "Mouse",
		amount: 80,
	},
	{
		id: 3,
		customerId: 2,
		firstName: "Emma",
		lastName: "Smith",
		purchaseDate: "2024-02-10",
		product: "Keyboard",
		amount: 150,
	},
];

describe("rewardAggregator", () => {
	test("adds rewardPoints to every transaction", () => {
		const result = rewardAggregator(transactions);

		expect(result.rewardTransactions).toHaveLength(3);

		result.rewardTransactions.forEach((transaction) => {
			expect(transaction.rewardPoints).toBeDefined();
		});
	});
});

test("aggregates total rewards per customer", () => {
	const result = rewardAggregator(transactions);

	const john = result.totalRewards.find(
		(reward) => reward.firstName === "John",
	);

	expect(john.rewardPoints).toBe(120);

	const emma = result.totalRewards.find(
		(reward) => reward.firstName === "Emma",
	);

	expect(emma.rewardPoints).toBe(150);
});

test("calculates dashboard statistics", () => {
	const result = rewardAggregator(transactions);

	expect(result.stats.customers).toBe(2);
	expect(result.stats.transactions).toBe(3);
	expect(result.stats.months).toBe(2);
	expect(result.stats.rewardsAwarded).toBe(270);
});

test("sorts monthly rewards by year then month", () => {
	const data = [
		{
			id: 1,
			customerId: 1,
			customerName: "John",
			purchaseDate: "2024-02-15",
			amount: 120,
		},
		{
			id: 2,
			customerId: 1,
			customerName: "John",
			purchaseDate: "2023-12-15",
			amount: 120,
		},
		{
			id: 3,
			customerId: 1,
			customerName: "John",
			purchaseDate: "2024-01-15",
			amount: 120,
		},
	];

	const result = rewardAggregator(data);

	expect(result.monthlyRewards[0].year).toBe(2023);
	expect(result.monthlyRewards[0].monthNumber).toBe(12);

	expect(result.monthlyRewards[1].year).toBe(2024);
	expect(result.monthlyRewards[1].monthNumber).toBe(1);

	expect(result.monthlyRewards[2].monthNumber).toBe(2);
});

test("handles decimal amounts correctly", () => {
	const data = [
		{
			id: 1,
			customerId: 1,
			customerName: "John",
			purchaseDate: "2024-01-15",
			amount: 100.8,
		},
	];

	const result = rewardAggregator(data);
	expect(result.rewardTransactions[0].rewardPoints).toBe(52);
});
