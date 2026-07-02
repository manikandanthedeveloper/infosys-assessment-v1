import rewardCalculator from "../utils/rewardCalculator";

describe("rewardCalculator", () => {
	test("returns 90 points for $120", () => {
		expect(rewardCalculator(120)).toBe(90);
	});
});
