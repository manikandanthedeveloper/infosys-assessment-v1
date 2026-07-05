const monthLongFormatter = new Intl.DateTimeFormat("en-US", {
	month: "long",
});
const monthShortFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
});
function pad(value) {
	return String(value).padStart(2, "0");
}

function dateFormatter(dateString) {
	const date = new Date(dateString);
	const day = date.getDate();
	const monthNumber = date.getMonth() + 1;
	const year = date.getFullYear();
	const paddedDay = pad(day);
	const paddedMonth = pad(monthNumber);

	return {
		day,
		month: {
			number: monthNumber,
			name: monthLongFormatter.format(date),
			short: monthShortFormatter.format(date),
		},
		year,
		yyyyMmDd: `${year}-${paddedMonth}-${paddedDay}`,
		ddMmYyyy: `${paddedDay}-${paddedMonth}-${year}`,
		mmDdYyyy: `${paddedMonth}-${paddedDay}-${year}`,
		yyMmDd: `${String(year).slice(-2)}-${paddedMonth}-${paddedDay}`,
		MmYyyy: `${paddedMonth}-${year}`,
		yyyyMm: `${year}-${paddedMonth}`,
	};
}

export default dateFormatter;
