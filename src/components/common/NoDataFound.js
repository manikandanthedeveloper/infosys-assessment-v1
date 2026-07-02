import PropTypes from "prop-types";

function NoDataFound({
	title = "No Data Found",
	description = "There is no data available to display.",
}) {
	return (
		<div className="flex flex-col items-center justify-center rounded-none border border-dashed border-gray-300 bg-white py-2 px-6 text-center mb-8">
			<div className="mb-3 text-2xl">📭</div>

			<h2 className="text-xl font-semibold text-gray-800">{title}</h2>

			<p className="mt-2 max-w-md text-sm text-gray-500">{description}</p>
		</div>
	);
}

NoDataFound.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string.isRequired,
};

export default NoDataFound;
