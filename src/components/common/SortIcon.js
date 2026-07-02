import PropTypes from "prop-types";
const iconSort = `${process.env.PUBLIC_URL}/assets/icon-sort.svg`;
const iconSortUp = `${process.env.PUBLIC_URL}/assets/icon-sort-up.svg`;
const iconSortDown = `${process.env.PUBLIC_URL}/assets/icon-sort-down.svg`;

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
