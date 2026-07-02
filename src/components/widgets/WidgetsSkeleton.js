function WidgetsSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
			{Array.from({ length: 4 }).map((_, index) => (
				<div
					className="mx-auto w-full max-w-sm rounded-none border border-gray-200 bg-white p-6"
					key={index}
				>
					<div className="flex animate-pulse space-x-4">
						<div className="flex-1 space-y-4 py-1">
							<div className="h-4 rounded-none bg-gray-200"></div>
							<div className="space-y-3">
								<div className="grid grid-cols-4">
									<div className="col-span-1 h-8 w-8 rounded-none bg-gray-200"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default WidgetsSkeleton;
