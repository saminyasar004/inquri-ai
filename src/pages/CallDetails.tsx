import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CalendarDays, Play, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CalendarDay } from "react-day-picker";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

export default function CallDetails() {
	const callDetailsDashboardData = [
		{
			value: 40,
			title: "Total Call received",
			change: "+4%",
			period: "Today",
			changeColor: "#02DD02",
			iconColor: "#FFA745",
		},
		{
			value: 40,
			title: "Total sms received",
			change: "-20%",
			period: "Today",
			changeColor: "#FF3927",
			iconColor: "#FD6658",
		},
		{
			value: 405,
			title: "Calls transferred",
			change: "-2%",
			period: "July",
			changeColor: "#CCB507",
			iconColor: "#CCB507",
		},
		{
			value: 40,
			title: "Spam calls blocked",
			change: "2%",
			period: "July",
			changeColor: "#FDB118",
			iconColor: "#FDB118",
		},
	];

	const callData = [
		{
			cellNumber: "(205) 555-0100",
			callerType: "Spam",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Spam",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Customer",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Spam",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Customer",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Spam",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
		{
			cellNumber: "(205) 555-0100",
			callerType: "Other",
			callDate: "Feb 1, 2020",
			callTime: "09:30AM",
			summary: "View",
			about: "Transcript",
			recording: true,
		},
	];

	const [selectedTab, setSelectedTab] = useState<
		"callDetails" | "missedCall"
	>("callDetails");

	const [showCallSummaryModal, setShowCallSummaryModal] = useState(false);
	const [showTranscriptModal, setShowTranscriptModal] = useState(false);

	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 py-4">
				<div className="flex items-start w-full flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Call Details
					</h3>
				</div>
			</div>
			<div className="py-2 w-full grid grid-cols-4 gap-4">
				{callDetailsDashboardData.map((call, index) => (
					<div
						key={index}
						className="flex flex-row gap-8 items-center border border-[#343232] rounded-lg bg-black p-6 relative"
					>
						<div className="flex flex-row gap-2 items-center">
							<div className="w-16 h-16 rounded-full bg-[#171717] flex items-center justify-center">
								<Calendar color={call.iconColor} size={24} />
							</div>
						</div>

						<div className="flex flex-col gap-1">
							<h4 className="text-[#D8E1EB] text-3xl">
								{call.value}
							</h4>

							<span className="text-[#767777] font-normal text-base">
								{call.title}
							</span>
						</div>

						<span
							className={cn(
								"text-sm absolute top-3 right-3",
								`text-[${call.changeColor}]`
							)}
						>
							{call.change} {call.period}
						</span>
					</div>
				))}
			</div>

			<div className="py-2 w-full">
				<div className="flex w-full items-center justify-between gap-6">
					{/* tabs */}
					<div className="flex items-center justify-center gap-6">
						<div
							className={cn(
								"border-b-2 py-1 cursor-pointer",
								selectedTab === "callDetails"
									? "border-primary-500 *:text-primary-500"
									: "border-transparent"
							)}
							onClick={() => setSelectedTab("callDetails")}
						>
							<h6 className="pointer-events-none">
								Call Details
							</h6>
						</div>

						<div
							className={cn(
								"border-b-2 py-1 cursor-pointer",
								selectedTab === "missedCall"
									? "border-primary-500 *:text-primary-500"
									: "border-transparent"
							)}
							onClick={() => setSelectedTab("missedCall")}
						>
							<h6 className="pointer-events-none">Missed Call</h6>
						</div>
					</div>

					{/* search boxs */}
					<div className="flex items-center justify-center gap-6">
						<div className="relative">
							<CalendarDays
								size={20}
								color="#9A9A9A"
								className="absolute top-[18px] left-3"
							/>
							<Input
								className="w-full pl-10 pr-20"
								placeholder="12 July, 2024"
							/>
							<Button className="absolute top-0 right-0 h-full border-none rounded-tl-none rounded-bl-none bg-gradient-to-b from-[#00D500] to-[#006F00]">
								<Search size={30} color="#062206" />
							</Button>
						</div>

						<div className="relative">
							<Input
								className="w-full pr-20"
								placeholder="Search by number and name"
							/>
							<Button className="absolute top-0 right-0 h-full border-none rounded-tl-none rounded-bl-none bg-gradient-to-b from-[#00D500] to-[#006F00]">
								<Search size={30} color="#062206" />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="py-2 w-full">
				<div className="rounded-lg bg-black border border-[#343232]">
					<Table>
						<TableHeader>
							<TableRow className="bg-[#0F0F0F] rounded-lg hover:bg-black border-none">
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Cell Number
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Caller Type
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Call Date
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Call Time
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Call Summary
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									About
								</TableHead>
								<TableHead className="text-[#E6E6E6] font-arialRounded text-center">
									Recording
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{callData.map((call, index) => (
								<TableRow
									key={index}
									className="hover:bg-[#0F0F0F] border-l-0 rounded-lg border-r-0 border border-[#343232]"
								>
									<TableCell className="text-[#808080] text-center">
										{call.cellNumber}
									</TableCell>
									<TableCell className="text-[#808080] text-center">
										{call.callerType}
									</TableCell>
									<TableCell className="text-[#808080] text-center">
										{call.callDate}
									</TableCell>
									<TableCell className="text-[#808080] text-center">
										{call.callTime}
									</TableCell>
									<TableCell className="text-[#808080] text-center">
										<Button
											onClick={() =>
												setShowCallSummaryModal(true)
											}
											variant="link"
										>
											{call.summary}
										</Button>
									</TableCell>
									<TableCell className="text-[#808080] text-center">
										<Button
											onClick={() =>
												setShowTranscriptModal(true)
											}
											variant="link"
										>
											{call.about}
										</Button>
									</TableCell>
									<TableCell className="text-[#808080] flex flex-row gap-3 items-center">
										<div className="w-6 h-6 p-1 rounded-full bg-[#252525] border border-[#F1EFEF] flex items-center justify-center">
											<Play size={20} fill="#D0D0D0" />
										</div>

										<Progress
											value={55}
											className="w-[60%]"
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
			<div className="py-2 w-full">
				<Pagination>
					<PaginationContent className="w-full flex items-center justify-between">
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<div className="flex items-center justify-center gap-2">
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						</div>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>

			<CallSummaryModal
				isOpen={showCallSummaryModal}
				onClose={() => setShowCallSummaryModal(false)}
			/>
			<TranscriptModal
				isOpen={showTranscriptModal}
				onClose={() => setShowTranscriptModal(false)}
			/>
		</section>
	);
}

function CallSummaryModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Call Summary
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className="px-3 py-12">
					<div className="w-full flex flex-col gap-1">
						<h4 className="text-[#D8E1EB] font-medium text-lg">
							Service Description
						</h4>
						<p className="font-normal text-sm text-[#939597]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolorum, voluptate, quia, ipsa, doloremque,
							quae, aspernatur, repellendus, eaque, error, et,
							fugit, molestiae, quos, accusamus, velit, nihil,
							cumque.
						</p>
					</div>

					<div className="mt-6 border border-[#121212] rounded-lg p-6 flex flex-col gap-4">
						<div className="w-full flex flex-col gap-1">
							<h3 className="font-medium text-[#D8E1EB]">
								Question 1
							</h3>
							<p className="text-[#939597] text-sm">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Natus corrupti eum
								praesentium, nam dolorum odit harum. Voluptates
								non dolores explicabo, mollitia iure tempore
								tempora quae architecto ipsa quisquam nulla
								perferendis.
							</p>
						</div>

						<div className="w-full flex flex-col gap-1">
							<h3 className="font-medium text-[#D8E1EB]">
								Question 2
							</h3>
							<p className="text-[#939597] text-sm">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Natus corrupti eum
								praesentium, nam dolorum odit harum. Voluptates
								non dolores explicabo, mollitia iure tempore
								tempora quae architecto ipsa quisquam nulla
								perferendis.
							</p>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Okay
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function TranscriptModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[650px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-[#D8E1EB] text-center font-semibold">
						Conversation Transcript
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className="px-3 py-12">
					<div className="border border-[#121212] rounded-lg p-6 flex flex-col gap-4">
						<div className="w-full flex flex-col gap-1">
							<h3 className="font-medium text-[#D8E1EB]">
								First person name
							</h3>
							<p className="text-[#939597] text-sm">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Natus corrupti eum
								praesentium, nam dolorum odit harum. Voluptates
								non dolores explicabo, mollitia iure tempore
								tempora quae architecto ipsa quisquam nulla
								perferendis.
							</p>
						</div>

						<div className="w-full flex flex-col gap-1">
							<h3 className="font-medium text-[#D8E1EB]">
								Second person name
							</h3>
							<p className="text-[#939597] text-sm">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Natus corrupti eum
								praesentium, nam dolorum odit harum. Voluptates
								non dolores explicabo, mollitia iure tempore
								tempora quae architecto ipsa quisquam nulla
								perferendis.
							</p>
						</div>
					</div>
				</ScrollArea>
				<DialogFooter className="px-3">
					<Button type="submit" className="w-full" variant="primary">
						Okay
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
