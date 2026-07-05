export default function rewardCalculator(amount) {
	if (!Number.isFinite(amount)) {
		return 0;
	}
	const wholeAmount = Math.floor(amount);
	let reward = 0;

	if (wholeAmount > 100) {
		reward = 50 + (wholeAmount - 100) * 2;
	} else if (wholeAmount > 50) {
		reward = wholeAmount - 50;
	}

	return Number(reward);
}
