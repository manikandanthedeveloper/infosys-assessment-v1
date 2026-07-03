import { useMemo } from "react";
import TableSkeleton from "../components/common/TableSkeleton";
import WidgetsSkeleton from "../components/widgets/WidgetsSkeleton";
import Error from "../components/common/Error";
import Header from "../components/common/Header";
import MonthlyRewardTable from "../components/monthlyReward/MonthlyRewardTable";
import TotalRewardTable from "../components/totalRewards/TotalRewardTable";
import TransactionTable from "../components/transactions/TransactionTable";
import Widgets from "../components/widgets/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import rewardAggregator from "../utils/rewardAggregator";
import DataSection from "../components/common/DataSection";
import filterLatestMonths from "../utils/filterLatestMonths";
import HeaderSkeleton from "../components/common/HeaderSkeleton";

function Dashboard() {
	const { transactions, loading, error, refetch } = useTransactions();
	const filteredTransactions = useMemo(
		() => filterLatestMonths(transactions),
		[transactions],
	);
	const { stats, monthlyRewards, totalRewards, rewardTransactions } = useMemo(
		() => rewardAggregator(filteredTransactions),
		[filteredTransactions],
	);
	const widgetsState = stats.transactions ? [stats] : [];

	if (error) {
		return (
			<Error
				title="Unable to load transactions"
				description={error.message}
				onRetry={refetch}
			/>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-8">
			{loading ? (
				<HeaderSkeleton />
			) : (
				<Header monthCount={stats.months} />
			)}
			<DataSection
				loading={loading}
				data={widgetsState}
				skeleton={<WidgetsSkeleton />}
				emptyMessage="There is no widget data available to display."
			>
				<Widgets
					customers={stats.customers}
					transactions={stats.transactions}
					rewardsAwarded={stats.rewardsAwarded}
					months={stats.months}
				/>
			</DataSection>
			<DataSection
				loading={loading}
				data={monthlyRewards}
				skeleton={<TableSkeleton />}
				emptyMessage="There is no Monthly Rewards data available to display."
			>
				<MonthlyRewardTable monthlyReward={monthlyRewards} />
			</DataSection>
			<DataSection
				loading={loading}
				data={totalRewards}
				skeleton={<TableSkeleton />}
				emptyMessage="There is no Total Rewards data available to display."
			>
				<TotalRewardTable totalRewards={totalRewards} />
			</DataSection>
			<DataSection
				loading={loading}
				data={rewardTransactions}
				skeleton={<TableSkeleton />}
				emptyMessage="There is no Transactions data available to display."
			>
				<TransactionTable rewardTransactions={rewardTransactions} />
			</DataSection>
		</div>
	);
}

export default Dashboard;
