import PropTypes from "prop-types";

function TableRowSkeleton({ className = "" }) {
	return (
		<div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
	);
}

TableRowSkeleton.propTypes = {
	className: PropTypes.string,
};

export default TableRowSkeleton;
