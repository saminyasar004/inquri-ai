import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardCallPieChart = () => {
	const data = [
		{ name: "Transferred", value: 143.03, color: "#3B82F6" },
		{ name: "Info provided", value: 67.49, color: "#F97316" },
		{ name: "Missed", value: 90.72, color: "#06B6D4" },
		{ name: "Spam", value: 124.2, color: "#EA580C" },
		{ name: "Others", value: 135.76, color: "#6366F1" },
	];

	const totalCalls = data.reduce((sum, item) => sum + item.value, 0);

	const renderCustomizedLabel = (props: any) => {
		const { cx, cy, midAngle, innerRadius, outerRadius, value, index } =
			props;
		const RADIAN = Math.PI / 180;
		const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		// Only show labels for larger segments
		if (value < 100) return null;

		return (
			<g>
				<line
					x1={
						cx +
						(innerRadius + (outerRadius - innerRadius) * 0.9) *
							Math.cos(-midAngle * RADIAN)
					}
					y1={
						cy +
						(innerRadius + (outerRadius - innerRadius) * 0.9) *
							Math.sin(-midAngle * RADIAN)
					}
					x2={x}
					y2={y}
					stroke="#6B7280"
					strokeWidth={1}
				/>
				<text
					x={x}
					y={y - 8}
					fill="#6B7280"
					textAnchor={x > cx ? "start" : "end"}
					dominantBaseline="central"
					fontSize="12"
					fontWeight="400"
				>
					{data[index].name}
				</text>
				<text
					x={x}
					y={y + 8}
					fill="#E5E7EB"
					textAnchor={x > cx ? "start" : "end"}
					dominantBaseline="central"
					fontSize="14"
					fontWeight="600"
				>
					{value}
				</text>
			</g>
		);
	};

	const CustomLegend = (props) => {
		const { payload } = props;
		return (
			<div className="flex flex-col gap-2 ml-8">
				{payload.map((entry, index) => (
					<div key={index} className="flex items-center gap-2">
						<div
							className="w-2 h-2 rounded-full"
							style={{ backgroundColor: entry.color }}
						/>
						<span className="text-muted-foreground text-sm">
							{entry.value}
						</span>
					</div>
				))}
			</div>
		);
	};

	return (
		<Card className="col-span-3 bg-black border-[#343232]">
			<CardContent className="pb-0">
				<div className="h-[300px] w-full">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								cx="40%"
								cy="50%"
								labelLine={false}
								label={renderCustomizedLabel}
								outerRadius={100}
								innerRadius={60}
								fill="#8884d8"
								// className=""
								dataKey="value"
								strokeWidth={0}
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={entry.color}
									/>
								))}
							</Pie>
							<Legend
								content={<CustomLegend />}
								verticalAlign="middle"
								align="right"
								layout="vertical"
								iconType="circle"
							/>
						</PieChart>
					</ResponsiveContainer>

					{/* Center text */}
					{/* <div className="w-96 h-full flex items-center justify-center relative">
						<div className="absolute left-[340px] -top-[180px] flex items-center justify-center pointer-events-none">
							<div
								className="text-center"
								style={{ marginLeft: "-80px" }}
							>
								<div className="text-3xl font-bold text-[#808080]">
									{totalCalls.toFixed(1)}
								</div>
								<div className="text-[#AFAFAF]/70 text-sm">
									All listed calls
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</CardContent>
		</Card>
	);
};

export default DashboardCallPieChart;
