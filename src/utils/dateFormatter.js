function dateFormatter(dateString) {
	const date = new Date(dateString);
	const formatter = new Intl.DateTimeFormat("en-US", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
	const formattedDate = formatter.format(date);
	const day = date.getDate();
	const monthNumber = date.getMonth() + 1;
	const year = date.getFullYear();

	return {
		day,
		month: {
			number: monthNumber,
			name: date.toLocaleString("default", { month: "long" }),
			short: date.toLocaleString("default", { month: "short" }),
		},
		year,
		formattedDate,
		yyyyMmDd: `${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
		ddMmYyyy: `${String(day).padStart(2, "0")}-${String(monthNumber).padStart(2, "0")}-${year}`,
		mmDdYyyy: `${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}-${year}`,
		yyMmDd: `${String(year).slice(-2)}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
		MmYyyy: `${String(monthNumber).padStart(2, "0")}-${year}`,
	};
}

export default dateFormatter;
