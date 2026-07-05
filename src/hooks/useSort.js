import { useMemo, useState } from "react";

const comparators = {
	customerId: (a, b) =>
		String(a.customerId).localeCompare(String(b.customerId)),
	firstName: (a, b) => a.firstName.localeCompare(b.firstName),
	lastName: (a, b) => a.lastName.localeCompare(b.lastName),
	transactionId: (a, b) => String(a.id).localeCompare(String(b.id)),
	rewardPoints: (a, b) => a.rewardPoints - b.rewardPoints,
	amount: (a, b) => a.amount - b.amount,
	purchaseDate: (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate),
	month: (a, b) => {
		if (a.year !== b.year) {
			return a.year - b.year;
		}
		return a.monthNumber - b.monthNumber;
	},
	year: (a, b) => a.year - b.year,
	product: (a, b) => a.product.localeCompare(b.product),
};

function useSort(data, initialKey, initialDirection = "asc") {
  const [sortConfig, setSortConfig] = useState({
		key: initialKey,
		direction: initialDirection,
  });

  const sortedData = useMemo(() => {
		if (!sortConfig.key) {
			return [...data];
		}
		const sorted = [...data];
		const comparator = comparators[sortConfig.key];

		if (!comparator) {
			return [...data];
		}

		sorted.sort(comparator);
		if (sortConfig.direction === "desc") {
			sorted.reverse();
		}

		return sorted;
  }, [data, sortConfig]);

  const handleSort = (key) => {
		setSortConfig((prev) => ({
			key,
			direction:
				prev.key === key && prev.direction === "asc" ? "desc" : "asc",
		}));
  };
  return {
		sortedData,
		sortConfig,
		handleSort,
  };
}

export default useSort;