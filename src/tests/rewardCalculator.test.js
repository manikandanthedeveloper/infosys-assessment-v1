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
	test("returns 0 points for exactly $50", () => {
		expect(rewardCalculator(50)).toBe(0);
	});

	test("returns 250 points for $200", () => {
		expect(rewardCalculator(200)).toBe(250);
	});

	test("floors decimal amounts", () => {
		expect(rewardCalculator(100.8)).toBe(50);
	});

	test("floors decimal amounts 100.2", () => {
		expect(rewardCalculator(100.2)).toBe(50);
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
