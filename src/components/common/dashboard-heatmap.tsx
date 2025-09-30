import { useEffect, useRef } from "react";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardHeatmap = () => {
	const calRef = useRef<HTMLDivElement>(null);
	const cal = useRef<CalHeatmap | null>(null);

	useEffect(() => {
		if (!calRef.current) return;

		// Generate sample data for 7 days, 24 hours each
		const generateData = () => {
			const data: Record<string, number> = {};
			const now = new Date();
			const startDate = new Date(now);
			startDate.setDate(now.getDate() - 6); // 7 days ago

			for (let day = 0; day < 7; day++) {
				for (let hour = 0; hour < 24; hour++) {
					const date = new Date(startDate);
					date.setDate(startDate.getDate() + day);
					date.setHours(hour, 0, 0, 0);

					// Generate random call volumes (0-16 to match the legend)
					const callVolume = Math.floor(Math.random() * 17);
					data[Math.floor(date.getTime() / 1000)] = callVolume;
				}
			}
			return data;
		};

		cal.current = new CalHeatmap();

		cal.current.paint({
			data: {
				source: generateData(),
				type: "json",
				x: "date",
				y: "value",
			},
			date: {
				start: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
				max: new Date(),
			},
			range: 7,
			scale: {
				color: {
					type: "threshold",
					range: [
						"#0d1117",
						"#0e4429",
						"#006d32",
						"#26a641",
						"#39d353",
					],
					domain: [1, 4, 8, 12, 16],
				},
			},
			domain: {
				type: "day",
				gutter: 2,
				label: {
					text: "dddd",
					textAlign: "start",
					position: "left",
				},
			},
			subDomain: {
				type: "hour",
				radius: 2,
				width: 15,
				height: 15,
				gutter: 1,
				label: {
					text: (timestamp: number) => {
						const date = new Date(timestamp * 1000);
						const hour = date.getHours();
						return hour % 2 === 0
							? String(hour).padStart(2, "0") + ":00"
							: "";
					},
					textAlign: "start",
					position: "bottom",
				},
			},
			itemSelector: calRef.current,
			theme: "dark",
		});

		return () => {
			if (cal.current) {
				cal.current.destroy();
			}
		};
	}, []);

	return (
		<Card className="bg-card border-border">
			{/* <CardHeader>
				<CardTitle className="text-card-foreground">
					Receptionist call volume heatmap 7 days 24 hour
				</CardTitle>
			</CardHeader> */}
			<CardContent>
				<div className="relative">
					<div ref={calRef} className="cal-heatmap-container"></div>

					{/* Custom Legend */}
					<div className="absolute top-0 right-0 flex flex-col items-center">
						<div className="text-xs text-[#D8E1EB] mb-2 transform -rotate-90 origin-center whitespace-nowrap">
							Number of calls
						</div>
						<div className="flex flex-col gap-1">
							<div className="text-xs text-[#D8E1EB] text-right">
								16
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								14
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								12
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								10
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								8
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								4
							</div>
							<div className="text-xs text-[#D8E1EB] text-right">
								0
							</div>
						</div>
					</div>
				</div>

				<style
					dangerouslySetInnerHTML={{
						__html: `
            .cal-heatmap-container {
              background: transparent;
            }
            
            .ch-domain-text {
              fill: hsl(var(--muted-foreground)) !important;
              font-size: 12px;
            }
            
            .ch-subdomain-text {
              fill: hsl(var(--muted-foreground)) !important;
              font-size: 10px;
            }
            
            .ch-tooltip {
              background: hsl(var(--popover)) !important;
              color: hsl(var(--popover-foreground)) !important;
              border: 1px solid hsl(var(--border)) !important;
              border-radius: 4px;
              padding: 8px;
              font-size: 12px;
            }
          `,
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default DashboardHeatmap;
