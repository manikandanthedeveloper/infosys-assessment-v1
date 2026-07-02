function rewardCalculator(amount) {
	if (typeof amount !== "number" || Number.isNaN(amount)) {
		return 0;
	}

	const purchaseAmount = Math.floor(amount);

	if (purchaseAmount <= 50) {
		return 0;
	}

  if (purchaseAmount <= 100) {
		return purchaseAmount - 50;
  }

  return 50 + (purchaseAmount - 100) * 2;
}

export default rewardCalculator;
