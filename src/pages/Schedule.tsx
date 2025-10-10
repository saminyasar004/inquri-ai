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
	Calendar,
	CalendarIcon,
	Check,
	Clock,
	Copy,
	Edit,
	MoreHorizontal,
	Plus,
	Trash2,
	X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogDescription } from "@radix-ui/react-dialog";

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

	const fromTimeRef = useRef<HTMLInputElement>(null);
	const toTimeRef = useRef<HTMLInputElement>(null);

	const openFromTimePicker = () => {
		if (fromTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(fromTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				fromTimeRef.current.focus();
			}
		}
	};

	const openToTimePicker = () => {
		if (toTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(toTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				toTimeRef.current.focus();
			}
		}
	};

	const days = [
		{
			id: 1,
			name: "Saturday",
			isActive: true,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 2,
			name: "Sunday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 3,
			name: "Monday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 4,
			name: "Tuesday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 5,
			name: "Wednesday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 6,
			name: "Thursday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
		{
			id: 7,
			name: "Friday",
			isActive: false,
			fromTime: "12:00 AM",
			toTime: "12:00 AM",
		},
	];

	const [showTimeSlotDialog, setShowTimeSlotDialog] = useState(false);
	const [showUnavailableTimeSetupDialog, setShowUnavailableTimeSetupDialog] =
		useState(false);
	const [showAvailabilityDialog, setShowAvailabilityDialog] = useState(false);

	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 py-4">
				<div className="flex items-start w-full flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Schedule Management
					</h3>
				</div>
			</div>
			<div className="py-6">
				<div className="w-full grid grid-cols-2 gap-8">
					<div className="flex items-center justify-start">
						<Button
							onClick={() =>
								setShowUnavailableTimeSetupDialog(true)
							}
						>
							Unavailable <Plus className="h-4 w-4" />
						</Button>
					</div>

					<div className="flex items-center justify-between">
						<Button onClick={() => setShowTimeSlotDialog(true)}>
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
							<div className="w-full flex items-center justify-between">
								<h4 className="text-[#B2B2B2] font-normal text-base">
									Availability
								</h4>
								<Button
									onClick={() =>
										setShowAvailabilityDialog(true)
									}
								>
									Add <Plus className="h-4 w-4" />
								</Button>
							</div>

							<div className="w-full grid grid-cols-5 gap-4">
								<div className="col-span-2"></div>

								<div className="flex">
									<span className="text-[#808080] text-sm font-normal">
										From
									</span>
								</div>

								<div className="flex">
									<span className="text-[#808080] text-sm font-normal">
										To
									</span>
								</div>
							</div>

							{days.map((day, index) => (
								<div
									key={index}
									className="w-full grid grid-cols-5 gap-4"
								>
									{/* toggler */}
									<div className="flex items-center space-x-2 col-span-2">
										<Switch
											checked={day.isActive}
											id={day.name}
										/>
										<Label
											className="text-[#B2B2B2] font-normal text-base cursor-pointer"
											htmlFor={day.name}
										>
											{day.name}
										</Label>
									</div>

									<div className="flex">
										<div className="relative w-[120px]">
											<Input
												ref={fromTimeRef}
												type="time"
												placeholder={day.fromTime}
												className="w-full h-10"
											/>
											<Clock
												onClick={openFromTimePicker}
												className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
											/>
										</div>
									</div>

									<div className="relative w-[120px]">
										<Input
											ref={toTimeRef}
											type="time"
											placeholder={day.toTime}
											className="w-full h-10"
										/>
										<Clock
											onClick={openFromTimePicker}
											className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
										/>
									</div>

									<div className="flex items-center justify-center gap-2">
										<div
											className={cn(
												"w-5 h-5 p-1 rounded-full flex items-center justify-center",
												day.isActive
													? "bg-primary-500"
													: "bg-[#90A290]"
											)}
										>
											{day.isActive ? (
												<Check
													size={20}
													color="#252525"
												/>
											) : (
												<X size={20} color="#252525" />
											)}
										</div>
										<span
											className={cn(
												"text-sm font-normal",
												day.isActive
													? "text-primary-500"
													: "text-[#90A290]"
											)}
										>
											{day.isActive
												? "Active"
												: "Inactive"}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<TimeSlotSetup
				isOpen={showTimeSlotDialog}
				onClose={() => setShowTimeSlotDialog(false)}
			/>
			<UnavailableTimeSetupDialog
				isOpen={showUnavailableTimeSetupDialog}
				onClose={() => setShowUnavailableTimeSetupDialog(false)}
			/>
			<AvailabilityDialog
				isOpen={showAvailabilityDialog}
				onClose={() => setShowAvailabilityDialog(false)}
			/>
		</section>
	);
}

function AvailabilityDialog({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const fromTimeRef = useRef<HTMLInputElement>(null);
	const toTimeRef = useRef<HTMLInputElement>(null);

	const openFromTimePicker = () => {
		if (fromTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(fromTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				fromTimeRef.current.focus();
			}
		}
	};

	const openToTimePicker = () => {
		if (toTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(toTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				toTimeRef.current.focus();
			}
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Unavailable Time Set Up
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className="px-3 py-8">
					<div className="w-full grid gap-3">
						<Label
							htmlFor="dayName"
							className=" text-[#BEBDBD] text-sm"
						>
							Name
						</Label>

						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select a day" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="sat">
										Saturday
									</SelectItem>
									<SelectItem value="sun">Sunday</SelectItem>
									<SelectItem value="mon">Monday</SelectItem>
									<SelectItem value="tue">Tuesday</SelectItem>
									<SelectItem value="wed">
										Wednesday
									</SelectItem>
									<SelectItem value="thu">
										Thursday
									</SelectItem>
									<SelectItem value="fri">Friday</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="w-full grid gap-3 pt-5">
						<Label
							htmlFor="date"
							className=" text-[#BEBDBD] text-sm"
						>
							Unavailable From
						</Label>
						<div className="relative">
							<Input
								ref={fromTimeRef}
								type="time"
								placeholder="Select time"
								className="w-full"
							/>
							<Clock
								onClick={openFromTimePicker}
								className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
							/>
						</div>
					</div>

					<div className="w-full grid gap-3 pt-5">
						<Label
							htmlFor="date"
							className=" text-[#BEBDBD] text-sm"
						>
							Unavailable To
						</Label>
						<div className="relative">
							<Input
								ref={toTimeRef}
								type="time"
								placeholder="Select time"
								className="w-full"
							/>
							<Clock
								onClick={openToTimePicker}
								className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
							/>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function UnavailableTimeSetupDialog({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const fromDateRef = useRef<HTMLInputElement>(null);
	const toDateRef = useRef<HTMLInputElement>(null);
	const fromTimeRef = useRef<HTMLInputElement>(null);
	const toTimeRef = useRef<HTMLInputElement>(null);

	const openFromDatePicker = () => {
		if (fromDateRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(fromDateRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				fromDateRef.current.focus();
			}
		}
	};

	const openFromTimePicker = () => {
		if (fromTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(fromTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				fromTimeRef.current.focus();
			}
		}
	};

	const openToDatePicker = () => {
		if (toDateRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(toDateRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				toDateRef.current.focus();
			}
		}
	};

	const openToTimePicker = () => {
		if (toTimeRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(toTimeRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				toTimeRef.current.focus();
			}
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Unavailable Time Set Up
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className="px-3 py-8">
					<div className="w-full grid gap-3">
						<Label
							htmlFor="name"
							className=" text-[#BEBDBD] text-sm"
						>
							Name
						</Label>
						<Input
							id="name"
							type="text"
							placeholder="Enter here"
							variant="default"
						/>
					</div>

					<div className="w-full flex flex-col gap-3 pt-5">
						<Label
							htmlFor="timeSlot"
							className=" text-[#BEBDBD] text-sm"
						>
							Unavailable From
						</Label>

						<div className="w-full flex flex-row items-center gap-4">
							<div className="w-full flex flex-col gap-2">
								<div className="relative w-full">
									<Input
										ref={fromDateRef}
										type="date"
										placeholder="Duration of each service time"
										className="w-full h-10"
									/>
									<Calendar
										onClick={openFromDatePicker}
										className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
									/>
								</div>
							</div>

							<div className="w-full flex flex-col gap-2">
								<div className="relative w-full">
									<Input
										ref={fromTimeRef}
										type="time"
										placeholder="Duration of each service time"
										className="w-full h-10"
									/>
									<Clock
										onClick={openFromTimePicker}
										className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-3 pt-5">
						<Label
							htmlFor="timeSlot"
							className=" text-[#BEBDBD] text-sm"
						>
							Unavailable To
						</Label>

						<div className="w-full flex flex-row items-center gap-4">
							<div className="w-full flex flex-col gap-2">
								<div className="relative w-full">
									<Input
										ref={toDateRef}
										type="date"
										placeholder="Duration of each service time"
										className="w-full h-10"
									/>
									<Calendar
										onClick={openToDatePicker}
										className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
									/>
								</div>
							</div>

							<div className="w-full flex flex-col gap-2">
								<div className="relative w-full">
									<Input
										ref={toTimeRef}
										type="time"
										placeholder="Duration of each service time"
										className="w-full h-10"
									/>
									<Clock
										onClick={openToTimePicker}
										className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
									/>
								</div>
							</div>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function TimeSlotSetup({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const timeSlotRef = useRef<HTMLInputElement>(null);

	const openTimeSlotPicker = () => {
		if (timeSlotRef.current) {
			// Modern browsers support showPicker()
			if ("showPicker" in HTMLInputElement.prototype) {
				(timeSlotRef.current as any).showPicker();
			} else {
				// Fallback: focus the input (triggers picker in most browsers)
				timeSlotRef.current.focus();
			}
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Time Slot Set Up
					</DialogTitle>
					<DialogDescription className="text-[#818384] text-center text-sm">
						Duration of an appointment booking
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className="px-3 py-8">
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="timeSlot"
							className=" text-[#BEBDBD] text-sm"
						>
							Time slot size
						</Label>
						<div className="relative w-full">
							<Input
								ref={timeSlotRef}
								type="time"
								placeholder="Duration of each service time"
								className="w-full h-10"
							/>
							<Clock
								onClick={openTimeSlotPicker}
								className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
							/>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
