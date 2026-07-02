import PropTypes from "prop-types";

function Widget({ children }) {
	return (
		<div className="bg-white rounded-none border border-gray-200 p-6 animate-widget">
			{children}
		</div>
	);
}

Widget.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Widget;
