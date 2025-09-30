import DashboardCallPieChart from "@/components/common/dashboard-call-pie-chart";
import DashboardHeatmap from "@/components/common/dashboard-heatmap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { Bell, CalendarCheck } from "lucide-react";
import { useEffect } from "react";

const callsData = [
	{
		phoneNumber: "(205) 555-0100",
		callTime: "Spam",
		callerType: "Spam",
	},
	{
		phoneNumber: "(405) 555-0128",
		callTime: "Customer",
		callerType: "Customer",
	},
	{
		phoneNumber: "(239) 555-0108",
		callTime: "Customer",
		callerType: "Customer",
	},
];

export default function Dashboard() {
	const cal = new CalHeatmap();

	useEffect(() => {
		cal.paint({ range: 12 });
	}, []);

	return (
		<>
			<div className="w-full grid grid-cols-5 gap-3 py-6">
				<div className="col-span-2 grid grid-cols-2 gap-3">
					<div className="flex flex-col gap-16 pr-4 border-r border-[#272525]">
						<div className="space-y-3">
							<h4 className="text-[#D8E1EB]">Allotted Number</h4>
							<p className="text-[#808080]">
								Share personal Ai agent number everywhereShare
								personal Ai agent number everywhere
							</p>
						</div>
						<div className="space-y-3">
							<h5 className="text-[#30A930] text-sm font-semibold font-openSans">
								(Applicable until: 12/12/2025)
							</h5>
							<div className="w-full rounded-full px-4 py-3 flex items-center justify-center bg-[#212121] text-[#D8E1EB]">
								+8801775551325
							</div>
						</div>
					</div>
					{/* location */}
					<div className="w-full h-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0635374797084!2d90.40503067584632!3d23.7807516786498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1759220791549!5m2!1sen!2sbd"
							className="w-full h-full rounded-lg"
							loading="lazy"
							// referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
				{/* todays bookings */}
				<div className="col-span-3">
					<Card className="bg-black border-0">
						<CardHeader className="flex flex-row items-center justify-between py-0 pb-5">
							<CardTitle className="text-lg text-[#D8E1EB]">
								Today's Bookings
							</CardTitle>
							<Button
								variant="ghost"
								size="sm"
								className="text-primary-500 hover:bg-primary-500/10 hover:text-primary-500 h-auto font-semibold transition-all duration-100 text-sm p-2"
							>
								View all
							</Button>
						</CardHeader>
						<CardContent className="space-y-6">
							{/* Timeline */}
							<div className="relative">
								<div className="w-full grid grid-cols-5 gap-3 border-b border-[#272525]">
									{Array.from({ length: 5 }, (_, i) => (
										<div className="w-full flex flex-col gap-3">
											<div
												key={i}
												className="flex flex-row gap-2 items-center"
											>
												<div
													className={cn(
														"w-4 h-4 rounded-full",
														i === 0
															? "bg-primary-500"
															: "bg-[#474947]"
													)}
												></div>
												<div
													className={cn(
														"flex-1 h-[0.1px] w-full",
														i === 0
															? "bg-primary-500"
															: "bg-[#474747]"
													)}
												></div>
											</div>

											<div
												className={cn(
													"w-full flex items-center justify-center py-4",
													i === 0
														? "border-b border-primary-500 bg-gradient-to-r from-[#0E200E] to-[#030C03]"
														: ""
												)}
											>
												<span className="text-[#D8E1EB]">
													7.30 AM
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Booking Details */}
							<div className="space-y-3">
								<div className="text-[#ACACAC] font-arialRounded text-base">
									<div className="font-medium text-base">
										82 Riverside Drive
									</div>
									<div className="font-medium text-base">
										New York, NY 10024
									</div>
								</div>

								<p className="text-[#808080] text-sm leading-relaxed">
									Professional electrician services
									specializing in ceiling light installations,
									outlet repairs, and electrical
									troubleshooting sional electrician services
									specializing in ceiling light installations,
									outlet repairs, and electrical. Professional
									electrician services specializing in ceiling
									light installations, outlet repairs, and
									electrical troubleshooting.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className="w-full grid grid-cols-5 gap-4 py-3">
				<div className="col-span-2 w-full grid grid-cols-2 grid-rows-2 gap-4">
					<div className="w-full p-5 py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-8 items-center justify-center">
						<span className="text-[#02DD02] absolute top-3 right-3 text-sm font-normal">
							+4% Today
						</span>
						<div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={24} color="#FFA745" />
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-[#D8E1EB] text-3xl">
								40
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-sm">
								Total Call received
							</h6>
						</div>
					</div>

					<div className="w-full p-5 py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-8 items-center justify-center">
						<span className="text-[#FF3927] absolute top-3 right-3 text-sm font-normal">
							-20% Today
						</span>
						<div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={24} color="#FD6658" />
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-[#D8E1EB] text-3xl">
								40
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-sm">
								Total SMS received
							</h6>
						</div>
					</div>

					<div className="w-full p-5 py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-8 items-center justify-center">
						<span className="text-[#FF3927] absolute top-3 right-3 text-sm font-normal">
							July
						</span>
						<div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={24} color="#CCB507" />
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-[#D8E1EB] text-3xl">
								405
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-sm">
								Calls Transterred
							</h6>
						</div>
					</div>

					<div className="w-full p-5 py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-8 items-center justify-center">
						<span className="text-[#FDB118] absolute top-3 right-3 text-sm font-normal">
							-2% July
						</span>
						<div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={24} color="#FDB118" />
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-[#D8E1EB] text-3xl">
								40
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-sm">
								Spam Calls Blocked
							</h6>
						</div>
					</div>
				</div>
				<div className="col-span-3">
					<div className="rounded-lg bg-black border border-[#343232]">
						<Table>
							<TableHeader>
								<TableRow className="bg-[#0F0F0F] rounded-lg hover:bg-black border-none">
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Latest calls
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Call Time
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Caller Type
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Call description
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										About
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{callsData.map((call, index) => (
									<TableRow
										key={index}
										className="hover:bg-[#0F0F0F] border-l-0 rounded-lg border-r-0 border border-[#343232]"
									>
										<TableCell className="text-[#808080] font-medium">
											{call.phoneNumber}
										</TableCell>
										<TableCell className="text-[#808080]">
											{call.callTime}
										</TableCell>
										<TableCell className="text-[#808080]">
											{call.callerType}
										</TableCell>
										<TableCell>
											<button className="text-primary-500 hover:text-primary-500/80 transition-all duration-100 font-semibold">
												View
											</button>
										</TableCell>
										<TableCell>
											<button className="text-primary-500 hover:text-primary-500/80 transition-all duration-100 font-semibold underline underline-offset-4">
												Transcript
											</button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>

			<div className="w-full grid grid-cols-5 gap-3 py-3">
				<div className="col-span-2">
					<div className="w-full p-5 py-8 rounded-xl border border-[#343232] bg-black flex flex-col gap-4 items-center justify-center">
						<div className="w-full flex items-center justify-between">
							<h4 className="text-[#D8E1EB]">Notification</h4>
							<Button
								variant="ghost"
								size="sm"
								className="text-primary-500 hover:bg-primary-500/10 hover:text-primary-500 h-auto font-semibold transition-all duration-100 text-sm p-2"
							>
								View all
							</Button>
						</div>

						<div className="w-full flex flex-col gap-3">
							{Array.from({ length: 4 }, (_, i) => (
								<div className="w-full flex flex-row gap-3 items-center">
									<div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center">
										<Bell color="#F1B83C" size={24} />
									</div>
									<p className="text-[#808080] text-sm">
										Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Ad praesentium
										consequatur nulla
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* dashboard call pie chart */}
				<DashboardCallPieChart />
			</div>

			<div className="w-full py-6">
				{/* <div id="cal-heatmap"></div> */}
				{/* <DashboardHeatmap /> */}
			</div>
		</>
	);
}
