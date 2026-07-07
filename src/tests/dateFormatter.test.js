import dateFormatter from "../utils/dateFormatter";

describe("dateFormatter", () => {
  test("formats January date correctly", () => {
    const result = dateFormatter("2024-01-15");

    expect(result.day).toBe(15);
    expect(result.month).toEqual({
      number: 1,
      short: "Jan",
      name: "January",
    });
    expect(result.year).toBe(2024);
    expect(result.MmYyyy).toBe("01-2024");
  });

  test("formats December correctly", () => {
    const result = dateFormatter("2023-12-25");

    expect(result.month.number).toBe(12);
    expect(result.month.short).toBe("Dec");
    expect(result.year).toBe(2023);
    expect(result.MmYyyy).toBe("12-2023");
  });

  test("works across years", () => {
    expect(dateFormatter("2023-12-31").year).toBe(2023);
    expect(dateFormatter("2024-01-01").year).toBe(2024);
  });
});
