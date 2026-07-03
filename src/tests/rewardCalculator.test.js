import rewardCalculator from "../utils/rewardCalculator";

describe("rewardCalculator", () => {
	test("returns 90 points for $120", () => {
		expect(rewardCalculator(120)).toBe(90);
	});
	test("returns 0 points for $40", () => {
		expect(rewardCalculator(40)).toBe(0);
	});
	test("returns 50 points for $100", () => {
		expect(rewardCalculator(100)).toBe(50);
	});
	test("returns 25 points for $75", () => {
		expect(rewardCalculator(75)).toBe(25);
	});
	test("returns 0 points for NaN", () => {
		expect(rewardCalculator(NaN)).toBe(0);
	});
	test("returns 0 points for undefined", () => {
		expect(rewardCalculator(undefined)).toBe(0);
	});
	test("returns 0 points for Infinity", () => {
		expect(rewardCalculator(Infinity)).toBe(0);
	});
});
