import PropTypes from "prop-types";

function Table({ title, children }) {
	return (
		<div className="bg-white rounded-none border border-gray-200 mb-8">
			<div className="border-b border-b-gray-200 p-5">
				<h2 className="text-xl font-bold">{title}</h2>
			</div>

			<div className="overflow-x-auto">{children}</div>
		</div>
	);
}

Table.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Table;
