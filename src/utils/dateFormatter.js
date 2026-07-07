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
	const paddedMonth = pad(monthNumber);

	return {
		day,
		month: {
			number: monthNumber,
			name: monthLongFormatter.format(date),
			short: monthShortFormatter.format(date),
		},
		year,
		MmYyyy: `${paddedMonth}-${year}`,
		yyyyMm: `${year}-${paddedMonth}`,
	};
}

export default dateFormatter;
