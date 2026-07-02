import PropTypes from "prop-types";
import priceFormatter from "../../utils/priceFormatter";

function TransactionTableRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.id}</td>
			<td className="px-6 py-4">
				{item.firstName} {item.lastName}
			</td>
			<td className="px-6 py-4">{item.purchaseDate}</td>
			<td className="px-6 py-4">{item.product}</td>
			<td className="px-6 py-4 text-right">
				{priceFormatter(item.amount)}
			</td>
			<td className="px-6 py-4 text-right font-semibold">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

TransactionTableRow.propTypes = PropTypes.exact({
	id: PropTypes.string.isRequired,
	customerId: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	product: PropTypes.string.isRequired,
	purchaseDate: PropTypes.string.isRequired,
}).isRequired;

export default TransactionTableRow;
