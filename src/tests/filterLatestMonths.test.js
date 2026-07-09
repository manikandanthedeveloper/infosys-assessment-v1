import filterLatestMonths from "../utils/filterLatestMonths";

describe("filterLatestMonths", () => {
	test("keeps transactions from the latest three months only", () => {
		const transactions = [
			{
				id: "TXN1001",
				customerId: "CUS1001",
				purchaseDate: "2023-10-15",
				amount: 100,
			},
			{
				id: "TXN1002",
				customerId: "CUS1001",
				purchaseDate: "2024-01-20",
				amount: 120,
			},
			{
				id: "TXN1003",
				customerId: "CUS1002",
				purchaseDate: "2024-02-10",
				amount: 150,
			},
			{
				id: "TXN1004",
				customerId: "CUS1002",
				purchaseDate: "2024-03-05",
				amount: 180,
			},
		];

		const result = filterLatestMonths(transactions);

		expect(result).toHaveLength(3);
		expect(result.map((transaction) => transaction.id)).toEqual([
			"TXN1002",
			"TXN1003",
			"TXN1004",
		]);
		expect(result.every((transaction) => transaction.yyyyMm)).toBe(true);
	});
});
