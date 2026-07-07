import { MONTHS_TO_INCLUDE } from "../constants";
import dateFormatter from "./dateFormatter";
function filterLatestMonths(transactions) {
  const transactionsWithMonth = transactions.map((transaction) => ({
    ...transaction,
    yyyyMm: dateFormatter(transaction.purchaseDate).yyyyMm,
  }));

  const latestMonths = [
    ...new Set(
      transactionsWithMonth.map((transaction) => transaction.yyyyMm).sort(),
    ),
  ].slice(-MONTHS_TO_INCLUDE);

  return transactionsWithMonth.filter((transaction) =>
    latestMonths.includes(transaction.yyyyMm),
  );
}

export default filterLatestMonths;
