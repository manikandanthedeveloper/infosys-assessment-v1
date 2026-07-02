import PropTypes from "prop-types";
const iconSort = "/assets/icon-sort.svg";
const iconSortUp = "/assets/icon-sort.svg";
const iconSortDown = "/assets/icon-sort.svg";

function SortIcon({ sortConfig, orderBy, fieldName }) {
	return (
		<div className="flex flex-row items-center justify-items-start gap-4">
			<span>{fieldName}</span>
			<img
				src={
					sortConfig.key !== orderBy
						? iconSort
						: sortConfig.direction === "asc"
							? iconSortDown
							: iconSortUp
				}
				alt="Sort"
				height={20}
				width={20}
			/>
		</div>
	);
}

SortIcon.propTypes = {
	sortConfig: PropTypes.exact({
		key: PropTypes.string.isRequired,
		direction: PropTypes.oneOf(["asc", "desc"]).isRequired,
	}),
	orderBy: PropTypes.string.isRequired,
	fieldName: PropTypes.string.isRequired,
};

export default SortIcon;
