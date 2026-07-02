import { useMemo, useState } from "react";

const comparators = {
	customerId: (a, b) => a.customerId - b.customerId,
	customerName: (a, b) => a.customerName.localeCompare(b.customerName),
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
		const comparator =
			comparators[sortConfig.key] ??
			((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) return -1;
				if (a[sortConfig.key] > b[sortConfig.key]) return 1;
				return 0;
			});

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