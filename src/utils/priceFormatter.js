const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const priceFormatter = (value) => {
	const amount = Number(value);

	if (!Number.isFinite(amount)) {
		return "-";
	}

	return formatter.format(amount);
};

export default priceFormatter;
