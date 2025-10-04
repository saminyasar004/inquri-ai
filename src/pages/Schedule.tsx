import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, ChevronRight, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export interface Appointment {
	id: number;
	staffName: string;
	service: string;
	customerName: string;
	time: string;
	price: string;
	date: string; // Changed to full date string
	timeSlot: string;
}

export default function Schedule() {
	const [selectedBooking, setSelectedBooking] = useState<Appointment | null>(
		null
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 16)); // June 16, 2025
	const [showAddAppointment, setShowAddAppointment] = useState(false);

	// Sample appointments with actual dates
	const appointments: Appointment[] = [
		{
			id: 1,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "14:00-15:00",
			price: "$95",
			date: "2025-06-16", // Monday
			timeSlot: "14:00",
		},
		{
			id: 2,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "15:00-16:00",
			price: "$95",
			date: "2025-06-18", // Wednesday
			timeSlot: "15:00",
		},
		{
			id: 3,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "17:00-18:00",
			price: "$95",
			date: "2025-06-20", // Friday
			timeSlot: "17:00",
		},
		{
			id: 4,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "18:00-19:00",
			price: "$95",
			date: "2025-06-16", // Monday
			timeSlot: "18:00",
		},
		{
			id: 5,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "13:00-14:00",
			price: "$95",
			date: "2025-06-22", // Sunday
			timeSlot: "13:00",
		},
		// Add appointments for other weeks
		{
			id: 6,
			staffName: "Emma Wilson",
			service: "Hair Cut & Style",
			customerName: "Mike Chen",
			time: "14:00-15:00",
			price: "$85",
			date: "2025-06-24", // Next week Tuesday
			timeSlot: "14:00",
		},
		{
			id: 7,
			staffName: "Emma Wilson",
			service: "Color Treatment",
			customerName: "Lisa Wang",
			time: "16:00-17:00",
			price: "$120",
			date: "2025-06-26", // Next week Thursday
			timeSlot: "16:00",
		},
	];

	const timeSlots = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

	// Get the start of the week (Monday)
	const getWeekStart = (date: Date) => {
		const d = new Date(date);
		const day = d.getDay();
		const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
		return new Date(d.setDate(diff));
	};

	// Get the current week dates
	const getWeekDates = () => {
		const weekStart = getWeekStart(currentDate);
		const dates = [];
		for (let i = 0; i < 7; i++) {
			const date = new Date(weekStart);
			date.setDate(weekStart.getDate() + i);
			dates.push(date);
		}
		return dates;
	};

	const weekDates = getWeekDates();
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	// Format date range for header
	const formatDateRange = () => {
		const start = weekDates[0];
		const end = weekDates[6];
		const startStr = `${start.getDate()} ${start.toLocaleDateString(
			"en-US",
			{
				month: "long",
			}
		)}`;
		const endStr = `${end.getDate()} ${end.toLocaleDateString("en-US", {
			month: "long",
		})} ${end.getFullYear()}`;
		return `${startStr} - ${endStr}`;
	};

	// Navigation functions
	const goToPreviousWeek = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() - 7);
		setCurrentDate(newDate);
	};

	const goToNextWeek = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() + 7);
		setCurrentDate(newDate);
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	const handleViewBooking = (appointment: Appointment) => {
		setSelectedBooking(appointment);
		setIsModalOpen(true);
	};

	const getAppointmentForSlot = (dateStr: string, timeSlot: string) => {
		return appointments.find(
			(apt) => apt.date === dateStr && apt.timeSlot === timeSlot
		);
	};

	const getRandomScheduleBoxStyle = () => {
		const scheduleBoxStyles = [
			"bg-[#011A18] border-[#12BDB2]",
			"bg-[#1F0B30] border-[#8239BC]",
			"bg-[#06151E] border-[#54A0CA]",
			"bg-[#1F1908] border-[#A67D12]",
		];

		const randomIndex = Math.floor(
			Math.random() * scheduleBoxStyles.length
		);
		return scheduleBoxStyles[randomIndex];
	};

	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex items-center">
					<Dialog>
						<DialogTrigger asChild>
							<Button>
								10 Jan, 2025
								<span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 text-black">
									<ChevronRight size={40} />
								</span>
							</Button>
						</DialogTrigger>
						<DialogContent
							showClose={false}
							className="sm:max-w-[425px] p-0"
						>
							<Calendar
								mode="single"
								selected={date}
								onSelect={setDate}
								className="w-full rounded-md border shadow-sm"
								captionLayout="dropdown"
							/>
						</DialogContent>
					</Dialog>
				</div>
				<div className="flex items-center w-full flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Schedule Management
					</h3>
				</div>
				<div className="flex items-center justify-center">
					<Button onClick={() => setShowAddAppointment(true)}>
						Add appointment <Plus className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="p-6">
				<div className="w-full">
					<div className="p-6">
						<div className="w-full">
							{/* Calendar Grid */}
							<div className="bg-black rounded-lg border border-[#272525]">
								<div className="grid grid-cols-8 border-b border-[#272525]">
									<div className="p-4 flex items-center justify-center font-medium text-center border-r border-[#272525]">
										Date
									</div>
									{days.map((day, index) => (
										<div
											key={day}
											className="p-4 text-center border-r border-[#272525] last:border-r-0"
										>
											<div className="font-semibold text-base text-[#E6E6E6]">
												{day}
											</div>
										</div>
									))}
								</div>
								<div className="grid grid-cols-8 border-b border-[#272525]">
									<div className="p-4 flex items-center justify-center font-medium text-center border-r border-[#272525]">
										GMT + 6
									</div>
									{days.map((day, index) => (
										<div
											key={day}
											className="p-4 text-center border-r border-[#272525] last:border-r-0"
										>
											<div className="text-sm text-[#E6E6E6]">
												{weekDates[index].getDate()}{" "}
												{weekDates[
													index
												].toLocaleDateString("en-US", {
													month: "short",
												})}
											</div>
										</div>
									))}
								</div>

								{timeSlots.map((timeSlot) => (
									<div
										key={timeSlot}
										className="grid grid-cols-8 border-b last:border-b-0 min-h-[80px] border-[#272525]"
									>
										<div className="p-4 flex items-center justify-center border-r font-medium text-sm bg-black border-[#272525]">
											{timeSlot}
										</div>
										{weekDates.map((date, index) => {
											const dateStr = date
												.toISOString()
												.split("T")[0]; // Format as YYYY-MM-DD
											const appointment =
												getAppointmentForSlot(
													dateStr,
													timeSlot
												);
											return (
												<div
													key={`${dateStr}-${timeSlot}`}
													className="border-r last:border-r-0 p-2 relative border-[#272525]"
												>
													{appointment && (
														<div
															className={cn(
																getRandomScheduleBoxStyle(),
																"border-l-4 text-white rounded-lg p-2.5 text-sm"
															)}
														>
															<div className="font-medium">
																{
																	appointment.staffName
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.service
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.customerName
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.time
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.price
																}
															</div>
														</div>
													)}
												</div>
											);
										})}
									</div>
								))}
							</div>
						</div>

						{/* <BookingDetailsModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
							booking={selectedBooking}
						/> */}
					</div>
				</div>
			</div>

			<AppointmentAddDialog
				isOpen={showAddAppointment}
				onClose={() => setShowAddAppointment(false)}
			/>
		</section>
	);
}

function AppointmentAddDialog({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const inputDateRef = useRef<HTMLInputElement>(null);

	const openDatePicker = () => {
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
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Add Appointment
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className="h-[450px] px-3">
					<div className="grid gap-4 py-3 px-3">
						<div className="flex flex-row gap-2 items-center justify-center">
							<div className="w-full grid gap-3">
								<Label
									htmlFor="customerName"
									className=" text-[#BEBDBD] text-sm"
								>
									Customer Name
								</Label>
								<Input
									id="customerName"
									type="text"
									placeholder="Enter Staff Name"
									variant="default"
								/>
							</div>
							<div className="w-full grid gap-3">
								<Label
									htmlFor="date"
									className=" text-[#BEBDBD] text-sm"
								>
									Date
								</Label>
								<div className="relative">
									<Input
										ref={inputDateRef}
										type="date"
										placeholder="mm/dd/yy"
										className="w-full"
									/>
									<CalendarIcon
										onClick={openDatePicker}
										className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-row gap-2 items-center justify-center">
							<div className="w-full grid gap-3">
								<Label
									htmlFor="time"
									className=" text-[#BEBDBD] text-sm"
								>
									Time
								</Label>
								<Input
									id="time"
									type="text"
									placeholder="Enter Customer Name"
									variant="default"
								/>
							</div>
							<div className="w-full grid gap-3">
								<Label
									htmlFor="personalPhoneNumber"
									className=" text-[#BEBDBD] text-sm"
								>
									Personal Phone Number
								</Label>
								<Input
									id="personalPhoneNumber"
									type="text"
									placeholder="Enter Time"
									variant="default"
								/>
							</div>
						</div>

						<div className="grid gap-3">
							<Label
								htmlFor="emailAddress"
								className=" text-[#BEBDBD] text-sm"
							>
								Email Address
							</Label>
							<Input
								id="emailAddress"
								type="text"
								placeholder="Enter Price"
								variant="default"
							/>
						</div>
						<div className="grid gap-3">
							<Label
								htmlFor="location"
								className=" text-[#BEBDBD] text-sm"
							>
								Location
							</Label>
							<Input
								id="location"
								type="text"
								placeholder="Enter Date"
								variant="default"
							/>
						</div>
						<div className="grid gap-3">
							<Label
								htmlFor="descriptionOfRequiredService"
								className=" text-[#BEBDBD] text-sm"
							>
								Description of required service
							</Label>
							<Textarea
								id="descriptionOfRequiredService"
								rows={5}
								placeholder="Enter Time Slot"
							/>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Submit
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
