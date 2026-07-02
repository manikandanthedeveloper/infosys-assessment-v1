import PropTypes from "prop-types";
import TotalRewardRow from "./TotalRewardRow";

function TotalRewardTable({ totalRewards }) {
	return (
		<div className="bg-white rounded-none border border-gray-200 mb-8">
			<div className="border-b border-b-gray-200 p-5">
				<h2 className="text-xl font-bold">Total Rewards</h2>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left">
								Customer Name
							</th>
							<th className="px-6 py-3 text-right">
								Reward Points
							</th>
						</tr>
					</thead>
					<tbody>
						{totalRewards.map((item) => (
							<TotalRewardRow item={item} key={item.customerId} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

TotalRewardTable.propTypes = {
	totalRewards: PropTypes.arrayOf(
		PropTypes.exact({
			customerId: PropTypes.string.isRequired,
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			rewardPoints: PropTypes.number.isRequired,
		}).isRequired).isRequired,
};

export default TotalRewardTable;
