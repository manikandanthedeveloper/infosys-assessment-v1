import PropTypes from "prop-types";
import MonthlyRewardRow from "./MonthlyRewardRow";
import Table from "../common/Table";

import useSort from "../../hooks/useSort";
import SortIcon from "../common/SortIcon";

function MonthlyRewardTable({ monthlyRewards }) {
	const { sortedData, handleSort, sortConfig } = useSort(monthlyRewards, "");

	return (
		<Table title="Monthly Rewards">
			<table className="min-w-full">
				<thead className="bg-gray-50">
					<tr>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("customerId")}
						>
							<SortIcon
								sortConfig={sortConfig}
								orderBy="customerId"
								fieldName="Customer Id"
							/>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("firstName")}
						>
							<SortIcon
								sortConfig={sortConfig}
								orderBy="firstName"
								fieldName="First Name"
							/>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("lastName")}
						>
							<SortIcon
								sortConfig={sortConfig}
								orderBy="lastName"
								fieldName="Last Name"
							/>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("monthNumber")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<SortIcon
									sortConfig={sortConfig}
									orderBy="monthNumber"
									fieldName="Month"
								/>
							</div>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("year")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<SortIcon
									sortConfig={sortConfig}
									orderBy="year"
									fieldName="Year"
								/>
							</div>
						</th>
						<th className="px-6 py-3 text-right">Reward Points</th>
					</tr>
				</thead>

				<tbody>
					{sortedData.map((item) => (
						<MonthlyRewardRow item={item} key={item.id} />
					))}
				</tbody>
			</table>
		</Table>
	);
}

MonthlyRewardTable.propTypes = {
	monthlyRewards: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			customerId: PropTypes.string.isRequired,
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			month: PropTypes.string.isRequired,
			monthNumber: PropTypes.number,
			year: PropTypes.number.isRequired,
			rewardPoints: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

export default MonthlyRewardTable;
