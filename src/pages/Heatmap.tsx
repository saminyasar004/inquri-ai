import { cn } from "@/lib/utils";

interface HeatmapData {
	day: string;
	hours: number[];
}

interface CallVolumeHeatmapProps {
	data?: HeatmapData[];
	className?: string;
}

// Sample data matching the image
const defaultData: HeatmapData[] = [
	{
		day: "Saturday",
		hours: [
			2, 3, 4, 5, 14, 15, 16, 8, 7, 6, 5, 12, 13, 14, 8, 7, 15, 16, 14, 8,
			7, 6, 5, 4,
		],
	},
	{
		day: "Sunday",
		hours: [
			1, 2, 3, 4, 5, 6, 12, 8, 7, 6, 5, 4, 3, 12, 8, 7, 6, 5, 4, 3, 2, 1,
			2, 13,
		],
	},
	{
		day: "Monday",
		hours: [
			2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4,
			5, 6,
		],
	},
	{
		day: "Saturday",
		hours: [
			3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11,
			10, 9, 8, 7, 6,
		],
	},
	{
		day: "Saturday",
		hours: [
			2, 3, 8, 9, 10, 11, 12, 8, 7, 6, 11, 12, 8, 7, 6, 5, 4, 3, 2, 1, 2,
			3, 11, 12,
		],
	},
	{
		day: "Saturday",
		hours: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3,
			4, 5,
		],
	},
	{
		day: "Saturday",
		hours: [
			2, 3, 4, 5, 6, 7, 12, 8, 7, 6, 5, 4, 3, 12, 8, 7, 6, 5, 4, 3, 2, 1,
			2, 13,
		],
	},
];

export default function Heatmap({
	data = defaultData,
	className,
}: CallVolumeHeatmapProps) {
	const hours = Array.from({ length: 24 }, (_, i) => i);
	const maxValue = 30;

	// Generate color based on value (0-16 scale)
	const getColor = (value: number) => {
		if (value === 0) return "rgb(0, 20, 0)";

		// Green gradient from dark to bright
		const intensity = value / maxValue;
		const green = Math.floor(30 + intensity * 130); // 50-255
		const red = Math.floor(intensity * 50); // 0-50
		const blue = Math.floor(intensity * 30); // 0-30

		return `rgb(${red}, ${green}, ${blue})`;
	};

	return (
		<div className={cn("w-full", className)}>
			<div className="bg-black p-8 rounded-lg">
				<h2 className="text-center text-gray-300 text-lg mb-6">
					Receptionist call volume heatmap 7 days 24 hour)
				</h2>

				<div className="flex gap-4">
					{/* Main heatmap */}
					<div className="flex-1">
						{/* Day labels and cells */}
						<div className="space-y-0">
							{data.map((row, rowIndex) => (
								<div
									key={rowIndex}
									className="flex items-center gap-2"
								>
									{/* Day label */}
									<div className="w-20 text-gray-500 text-sm">
										{row.day}
									</div>

									{/* Hour cells */}
									<div className="flex gap-0 flex-1">
										{row.hours.map((value, colIndex) => (
											<div
												key={colIndex}
												className="h-8 flex-1"
												style={{
													backgroundColor:
														getColor(value),
												}}
												title={`${row.day} ${hours[colIndex]}:00 - ${value} calls`}
											/>
										))}
									</div>
								</div>
							))}
						</div>

						{/* Hour labels */}
						<div className="flex items-center gap-2 mt-2">
							<div className="w-20" />
							<div className="flex gap-1 flex-1">
								{hours.map((hour) => (
									<div
										key={hour}
										className="flex-1 text-center text-gray-500 text-xs"
									>
										{hour % 2 === 0
											? `0${hour}:00`.slice(-5)
											: ""}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Legend */}
					<div className="flex flex-col justify-between py-1">
						<div className="flex flex-col items-end gap-0">
							{[16, 14, 12, 10, 8, 6, 4, 2, 0].map((value) => (
								<div
									key={value}
									className="flex items-center gap-2"
								>
									<span className="text-gray-400 text-xs w-6 text-right">
										{value}
									</span>
									<div
										className="w-4 h-6"
										style={{
											backgroundColor: getColor(value),
										}}
									/>
								</div>
							))}
						</div>
						<div className="text-gray-500 text-xs mt-2 -rotate-90 origin-center whitespace-nowrap -translate-y-36 mr-1">
							Number of calls
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
