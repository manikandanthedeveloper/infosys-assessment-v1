import PropTypes from "prop-types";

function TotalRewardRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.firstName} {item.firstName}</td>
			<td className="px-6 py-4 text-right font-bold text-green-600">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

TotalRewardRow.propTypes = PropTypes.exact({
	customerId: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	rewardPoints: PropTypes.number.isRequired,
}).isRequired;

export default TotalRewardRow;
