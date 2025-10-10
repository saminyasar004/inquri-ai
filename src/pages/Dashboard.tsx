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
import { Bell, CalendarCheck, ChevronRight, X, Blocks, CalendarDays, Clock, Sparkles, PhoneCall, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Heatmap from "./Heatmap";

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
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { label: "Dashboard", href: "/dashboard", icon: <Blocks size={20} className="shrink-0" /> },
        { label: "Schedule", href: "/dashboard/schedule", icon: <Clock size={20} className="shrink-0" /> },
        { label: "Bookings", href: "/dashboard/bookings", icon: <CalendarDays size={20} className="shrink-0" /> },
        { label: "Train Agent", href: "/dashboard/train-agent", icon: <Sparkles size={20} className="shrink-0" /> },
        { label: "Call Details", href: "/dashboard/call-details", icon: <PhoneCall size={20} className="shrink-0" /> },
        { label: "Pricing", href: "/dashboard/pricing", icon: <Wallet size={20} className="shrink-0" /> },
    ];

	useEffect(() => {
		cal.paint({ range: 12 });
	}, []);

    return (
        <>
            {/* Mobile sidebar trigger */}
            <button
                aria-label="Open sidebar"
                className="md:hidden fixed left-3 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-primary-500 text-black shadow-[0_6px_24px_rgba(6,210,6,.35)] flex items-center justify-center active:scale-95"
                onClick={() => setMobileSidebarOpen(true)}
            >
                <ChevronRight size={22} />
            </button>

            {/* Mobile offcanvas sidebar */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 z-50 transition-opacity",
                    mobileSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setMobileSidebarOpen(false)}
                />
                <aside
                    className={cn(
                        "absolute left-0 top-0 h-full w-[88%] max-w-[360px] bg-[#0b0b0b] border-r border-[#1f1f1f] p-4 shadow-[0_20px_60px_rgba(0,0,0,.6)] transition-transform duration-300",
                        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[#D8E1EB] text-lg font-semibold">Menu</h3>
                        <button
                            aria-label="Close sidebar"
                            className="w-9 h-9 rounded-full bg-[#151515] text-[#D8E1EB] flex items-center justify-center"
                            onClick={() => setMobileSidebarOpen(false)}
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.href}
                                onClick={() => setMobileSidebarOpen(false)}
                                className={cn(
                                    "flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gradient-to-b hover:from-[#40DF40] hover:to-[#237923] hover:text-[#171821] px-3 rounded-md transition-all duration-0",
                                    location.pathname === link.href
                                        ? "bg-gradient-to-b from-[#40DF40] to-[#237923] text-[#171821]"
                                        : "text-white"
                                )}
                            >
                                {link.icon}
                                <span className="text-sm whitespace-pre inline-block !p-0 !m-0">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>

            {/* Mobile: show top info + map inline */}
            <div className="md:hidden w-full grid grid-cols-1 gap-3 py-4">
                <div className="rounded-xl border border-[#272525] p-4 bg-black">
                    <h4 className="text-[#D8E1EB] mb-2">Allotted Number</h4>
                    <p className="text-[#808080] text-sm mb-3">
                        Share personal Ai agent number everywhereShare personal Ai agent number everywhere
                    </p>
                    <h5 className="text-[#30A930] text-xs font-semibold font-openSans mb-2">
                        (Applicable until: 12/12/2025)
                    </h5>
                    <div className="w-full rounded-full px-4 py-3 flex items-center justify-center bg-[#212121] text-[#D8E1EB]">
                        +8801775551325
                    </div>
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden border border-[#272525]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0635374797084!2d90.40503067584632!3d23.7807516786498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1759220791549!5m2!1sen!2sbd"
                        className="w-full h-full"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-3 py-6">
                <div className="hidden md:grid col-span-2 grid-cols-2 gap-3">
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
                <div className="md:col-span-3 col-span-1">
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

			<div className="w-full grid grid-cols-1 md:grid-cols-5 gap-3 py-2">
				<div className="md:col-span-2 col-span-1 w-full grid grid-cols-2 grid-rows-2 gap-3">
					<div className="w-full p-3 md:p-5 py-5 md:py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-3 md:gap-6 items-center justify-center">
						<span className="text-[#02DD02] absolute top-2 right-2 text-[10px] md:text-sm font-normal">
							+4% Today
						</span>
						<div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={16} color="#FFA745" />
						</div>

						<div className="flex flex-col gap-1.5">
							<h4 className="font-semibold text-[#D8E1EB] text-xl md:text-3xl">
								40
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-[11px] md:text-sm leading-tight tracking-tight">
								Total Call received
							</h6>
						</div>
					</div>

					<div className="w-full p-3 md:p-5 py-5 md:py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-3 md:gap-6 items-center justify-center">
						<span className="text-[#FF3927] absolute top-2 right-2 text-[10px] md:text-sm font-normal">
							-20% Today
						</span>
						<div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#171717]">
							<CalendarCheck size={16} color="#FD6658" />
						</div>

						<div className="flex flex-col gap-1.5">
							<h4 className="font-semibold text-[#D8E1EB] text-xl md:text-3xl">
								40
							</h4>
							<h6 className="text-[#808080] font-openSans font-normal text-[11px] md:text-sm leading-tight tracking-tight">
								Total SMS received
							</h6>
						</div>
					</div>

                <div className="w-full p-3 md:p-5 py-5 md:py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-3 md:gap-6 items-center justify-center">
                    <span className="text-[#FF3927] absolute top-2 right-2 text-[10px] md:text-sm font-normal">
                        July
                    </span>
                    <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#171717]">
                        <CalendarCheck size={16} color="#CCB507" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h4 className="font-semibold text-[#D8E1EB] text-xl md:text-3xl">
                            405
                        </h4>
                        <h6 className="text-[#808080] font-openSans font-normal text-[11px] md:text-sm leading-tight tracking-tight">
                            Calls Transterred
                        </h6>
                    </div>
                </div>

                <div className="w-full p-3 md:p-5 py-5 md:py-8 relative rounded-xl border border-[#343232] bg-black flex flex-row gap-3 md:gap-6 items-center justify-center">
                    <span className="text-[#FDB118] absolute top-2 right-2 text-[10px] md:text-sm font-normal">
                        -2% July
                    </span>
                    <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#171717]">
                        <CalendarCheck size={16} color="#FDB118" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h4 className="font-semibold text-[#D8E1EB] text-xl md:text-3xl">
                            40
                        </h4>
                        <h6 className="text-[#808080] font-openSans font-normal text-[11px] md:text-sm leading-tight tracking-tight">
                            Spam Calls Blocked
                        </h6>
                    </div>
                </div>
				</div>
				<div className="md:col-span-3 col-span-1">
					<div className="rounded-lg bg-black border border-[#343232] overflow-x-auto">
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

			<div className="w-full grid grid-cols-1 md:grid-cols-5 gap-3 py-3">
				<div className="md:col-span-2 col-span-1">
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
				<Heatmap />
			</div>
		</>
	);
}
