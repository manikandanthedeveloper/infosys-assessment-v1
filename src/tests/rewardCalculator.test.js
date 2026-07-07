import rewardCalculator from "../utils/rewardCalculator";

describe("rewardCalculator", () => {
  test("returns 0 for invalid input", () => {
    expect(rewardCalculator(null)).toBe(0);
    expect(rewardCalculator(undefined)).toBe(0);
    expect(rewardCalculator("100")).toBe(0);
    expect(rewardCalculator(NaN)).toBe(0);
  });

  test("returns 0 for amounts less than or equal to $50", () => {
    expect(rewardCalculator(0)).toBe(0);
    expect(rewardCalculator(25)).toBe(0);
    expect(rewardCalculator(49)).toBe(0);
    expect(rewardCalculator(50)).toBe(0);
  });

  test("returns 1 point for each dollar over $50", () => {
    expect(rewardCalculator(51)).toBe(1);
    expect(rewardCalculator(75)).toBe(25);
    expect(rewardCalculator(99)).toBe(49);
    expect(rewardCalculator(100)).toBe(50);
  });

  test("returns 2 points for every dollar over $100", () => {
    expect(rewardCalculator(101)).toBe(52);
    expect(rewardCalculator(120)).toBe(90);
    expect(rewardCalculator(150)).toBe(150);
    expect(rewardCalculator(200)).toBe(250);
  });

  test("floors decimal amounts before calculating rewards", () => {
    expect(rewardCalculator(50.9)).toBe(0);
    expect(rewardCalculator(75.9)).toBe(25);
    expect(rewardCalculator(100.2)).toBe(50);
    expect(rewardCalculator(100.8)).toBe(50);
    expect(rewardCalculator(101.9)).toBe(52);
  });
});
