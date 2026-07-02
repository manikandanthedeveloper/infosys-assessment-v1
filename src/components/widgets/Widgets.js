import PropTypes from "prop-types";
import Widget from "../widgets/Widget";

function Widgets({ customers, transactions, rewardsAwarded, months }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
			<Widget>
				<p className="text-gray-500">Customers</p>
				<h2 className="text-3xl font-bold mt-2">{customers}</h2>
			</Widget>
			<Widget>
				<p className="text-gray-500">Transactions</p>
				<h2 className="text-3xl font-bold mt-2">{transactions}</h2>
			</Widget>
			<Widget>
				<p className="text-gray-500">Rewards</p>
				<h2 className="text-3xl font-bold mt-2">{rewardsAwarded}</h2>
			</Widget>
			<Widget>
				<p className="text-gray-500">Months</p>
				<h2 className="text-3xl font-bold mt-2">{months}</h2>
			</Widget>
		</div>
	);
}

Widgets.propTypes = {
	customers: PropTypes.number.isRequired,
	transactions: PropTypes.number.isRequired,
	rewardsAwarded: PropTypes.number.isRequired,
	months: PropTypes.number.isRequired,
};

export default Widgets;
