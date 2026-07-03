function HeaderSkeleton({ monthCount }) {
	return (
		<div className="flex animate-pulse space-x-4 mb-8">
			<div className="flex-1 space-y-6 py-1">
				<div className="h-6 rounded-none bg-gray-200"></div>
				<div className="space-y-3">
					<div className="grid grid-cols-5 gap-4">
						<div className="col-span-2 h-2 rounded-none bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderSkeleton;
