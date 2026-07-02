const priceFormatter = (value) => {
	if (typeof value !== "number") {
		throw new Error("Input value must be a number");
	}

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export default priceFormatter;
