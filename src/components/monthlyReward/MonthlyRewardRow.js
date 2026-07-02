import PropTypes from "prop-types";
function MonthlyRewardRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.customerId}</td>
			<td className="px-6 py-4">{item.firstName} {item.lastName}</td>
			<td className="px-6 py-4">{item.month}</td>
			<td className="px-6 py-4">{item.year}</td>
			<td className="px-6 py-4 text-right font-semibold">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

MonthlyRewardRow.propTypes = PropTypes.exact({
	id: PropTypes.string.isRequired,
	customerId: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	month: PropTypes.string.isRequired,
	monthNumber: PropTypes.number,
	year: PropTypes.number.isRequired,
	rewardPoints: PropTypes.number.isRequired,
}).isRequired;

export default MonthlyRewardRow;
