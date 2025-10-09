import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	CalendarIcon,
	Check,
	Clock,
	Copy,
	Edit,
	MoreHorizontal,
	Plus,
	Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export default function Schedule() {
	const scheduleData = [
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
		{
			name: "Eid Festival",
			from: "15 May 2020 09:00",
			to: "15 May 2020 09:00",
		},
	];

	const inputDateRef = useRef<HTMLInputElement>(null);

	const openTimePicker = () => {
		if (inputDateRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(inputDateRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				inputDateRef.current.focus();
			}
		}
	};

	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex items-start w-full flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Schedule Management
					</h3>
				</div>
			</div>
			<div className="p-6">
				<div className="w-full grid grid-cols-2 gap-8">
					<div className="flex items-center justify-start">
						<Button>
							Unavailable <Plus className="h-4 w-4" />
						</Button>
					</div>

					<div className="flex items-center justify-between">
						<Button>
							Time Slot <Plus className="h-4 w-4" />
						</Button>

						<div className="flex items-center justify-center gap-4">
							<span className="font-normal text-sm text-[#E6E6E6]">
								Default Booking
							</span>

							<Button size="sm">
								Copy <Copy className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>

				<div className="w-full grid grid-cols-2 gap-8 py-5">
					<div className="rounded-lg bg-black border border-[#343232]">
						<Table>
							<TableHeader>
								<TableRow className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] rounded-xl hover:bg-black border-none">
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Name
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Unavailable To
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded">
										Unavailable To
									</TableHead>
									<TableHead className="text-[#E6E6E6] font-arialRounded w-[100px]">
										Action
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{scheduleData.map((schedule, index) => (
									<TableRow
										key={index}
										className="hover:bg-[#0F0F0F] border-l-0 rounded-lg border-r-0 border border-[#343232]"
									>
										<TableCell className="text-[#808080] font-medium">
											{schedule.name}
										</TableCell>
										<TableCell className="text-[#808080]">
											{schedule.from}
										</TableCell>
										<TableCell className="text-[#808080]">
											{schedule.to}
										</TableCell>
										<TableCell className="w-[100px]">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														variant="ghost"
														className="hover:bg-[#1A1A1A] hover:text-dark-foreground-500 px-3"
													>
														<MoreHorizontal
															size={20}
														/>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent
													className="w-36"
													align="end"
												>
													<DropdownMenuLabel>
														Action
													</DropdownMenuLabel>
													<DropdownMenuGroup>
														<DropdownMenuItem>
															<Edit size={20} />
															Edit
														</DropdownMenuItem>
														<DropdownMenuItem>
															<Trash2 size={20} />
															Delete
														</DropdownMenuItem>
													</DropdownMenuGroup>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>

					<div className="w-full flex flex-col gap-2">
						<div className="w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
							<h4 className="text-[#E6E6E6]">
								Regular working time
							</h4>

							<Button
								size="sm"
								variant="ghost"
								className="hover:bg-[#1A1A1A] hover:text-dark-foreground-500 px-3"
							>
								<Edit className="h-4 w-4" />
								Edit
							</Button>
						</div>

						<p className="text-[#808080] text-sm py-5 text-center w-[90%] mx-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ab accusantium aliquid veritatis. Quis error
							porro laudantium sed ea officiis, exercitationem
							odit. Architecto fugiat consequatur beatae sequi
							aspernatur! Rerum, hic consectetur.
						</p>

						<div className="w-full flex flex-col gap-3 py-4">
							<div className="w-full grid grid-cols-5 gap-4">
								{/* toggler */}
								<div className="flex items-center space-x-2 col-span-2">
									<Switch id="airplane-mode" />
									<Label
										className="text-[#B2B2B2] font-normal text-base cursor-pointer"
										htmlFor="airplane-mode"
									>
										Saturday
									</Label>
								</div>

								<div className="flex">
									<div className="relative w-[120px]">
										<Input
											ref={inputDateRef}
											type="time"
											placeholder="mm/dd/yy"
											className="w-full h-10"
										/>
										<Clock
											onClick={openTimePicker}
											className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
										/>
									</div>
								</div>

								<div className="">
									<div className="relative w-[120px]">
										<Input
											ref={inputDateRef}
											type="time"
											placeholder="mm/dd/yy"
											className="w-full h-10"
										/>
										<Clock
											onClick={openTimePicker}
											className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
										/>
									</div>
								</div>

								<div className="flex items-center justify-center gap-2">
									<div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
										<Check size={20} color="#252525" />
									</div>
									<span className="text-primary-500 text-sm font-normal">
										Active
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
