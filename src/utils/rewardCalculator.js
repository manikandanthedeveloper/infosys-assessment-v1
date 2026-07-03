export default function rewardCalculator(amount) {
	if (!Number.isFinite(amount)) {
		return 0;
	}

	let reward = 0;

	if (amount > 100) {
		reward = 50 + (amount - 100) * 2;
	} else if (amount > 50) {
		reward = amount - 50;
	}

	return Math.round(reward);
}
