export const sortByDate = (items, field) =>
  [...items].sort((a, b) => new Date(a[field]) - new Date(b[field]));

export const sortByMonthYear = (items) =>
  [...items].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    if (a.monthNumber !== b.monthNumber) {
      return a.monthNumber - b.monthNumber;
    }

    return a.firstName.localeCompare(b.firstName);
  });

export const sortByName = (items, field) =>
  [...items].sort((a, b) => a[field].localeCompare(b[field]));
