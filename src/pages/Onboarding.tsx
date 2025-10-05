import { cn } from "@/lib/utils";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Diamond, Gem, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Simpro from "@/assets/images/simpro.svg";
import Tradify from "@/assets/images/tradify.svg";
import Calendly from "@/assets/images/calendly.svg";
import { Link } from "react-router-dom";

export default function Onboarding() {
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<div className="w-full h-auto py-24">
			<div className="container flex flex-col gap-4">
				{/* step progress indicator */}
				<div className="w-[40%] mx-auto flex flex-row gap-3">
					{Array.from({ length: 6 }, (_, i) => (
						<div
							className={cn(
								"w-full h-1 rounded-lg",
								currentStep >= i + 1
									? "bg-primary-500"
									: "bg-[#D9D9D9]"
							)}
						></div>
					))}
				</div>
				<span className="text-center text-sm text-[#D7D9FB]">
					Step {currentStep} of 6
				</span>

				<div className="w-[40%] mx-auto flex flex-col gap-3 py-5">
					<div className="flex gap-2">
						<Link to={"/pricing"}>
							<Button
								variant="link"
								className="text-[#D7D9FB] px-0"
							>
								<ChevronLeft size={16} />
								Back
							</Button>
						</Link>
					</div>

					{currentStep === 1 && (
						<Step1 next={() => setCurrentStep(2)} />
					)}
					{currentStep === 2 && (
						<Step2 next={() => setCurrentStep(3)} />
					)}
					{currentStep === 3 && (
						<Step3 next={() => setCurrentStep(4)} />
					)}
					{currentStep === 4 && (
						<Step4 next={() => setCurrentStep(5)} />
					)}
					{currentStep === 5 && (
						<Step5 next={() => setCurrentStep(6)} />
					)}
					{currentStep === 6 && (
						<Step6 next={() => setCurrentStep(7)} />
					)}
				</div>
			</div>
		</div>
	);
}

function Step1({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">Select your industry</h3>
				<p className="text-[#656565] text-base">
					Lorem Ipsum is simply dummy text of the printing and type
				</p>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-16 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-3">
					<Label>Search</Label>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Choose one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">
									Blueberry
								</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">
									Pineapple
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<Button
					onClick={next}
					variant="primary"
					className="w-full mt-16 mb-8"
				>
					Submit
				</Button>
			</div>
		</div>
	);
}

function Step2({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">Find your Business</h3>
				<p className="text-[#656565] text-base">
					Lorem Ipsum is simply dummy text of the printing and type
				</p>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-16 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-3 py-5">
					<div className="w-full flex items-center gap-0">
						<Tabs defaultValue="google">
							<TabsList>
								<TabsTrigger value="google">
									Google Search
								</TabsTrigger>
								<TabsTrigger value="url">Enter URL</TabsTrigger>
							</TabsList>
							<TabsContent value="google">
								<span className="text-center py-4 text-[#656565]">
									Find your business by name to train your AI
									with details
								</span>
							</TabsContent>
							<TabsContent value="url">
								<span className="text-center py-4 text-[#656565]">
									Find your business by entering URL to train
									your AI with details
								</span>
							</TabsContent>
						</Tabs>
					</div>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label>Search</Label>
					<Input placeholder="Enter here" />

					<span className="text-[#A4A4A4] text-center">
						searching...
					</span>
				</div>
				<Button
					onClick={next}
					variant="primary"
					className="w-full mt-16 mb-8"
				>
					Continue
				</Button>
			</div>
		</div>
	);
}

function Step3({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">Please wait</h3>
				<p className="text-[#656565] text-base">
					Wait a moment we are training your agent with your business
					data
				</p>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-16 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-2 py-5">
					<h4 className="text-xl text-[#D7DDE7]">
						Is this your Business?
					</h4>
					<p className="text-sm text-[#656565]">
						We found the following business information. Please
						review and confirm before proceeding to train your AI
						assistant
					</p>
				</div>
				<div className="w-full bg-[#0A0A0A] rounded-xl border broder-[#7A7A7A] p-5 flex flex-col gap-4">
					<h5 className="text-base text-[#D7DDE7]">
						Sample Business Name
					</h5>
					<p className="text-sm text-[#A4A4A4]">
						123 Main Street, Central City, NY 10001, USA <br />{" "}
						Phone: (123) 456-7890 <br /> Website:
						https://www.samplebusiness.com
					</p>
				</div>

				<div className="w-full flex gap-4 items-center py-6">
					<Button className="w-full">Go Back</Button>
					<Button className="w-full" onClick={next} variant="primary">
						Yes, Train My Agent
					</Button>
				</div>
			</div>
		</div>
	);
}

function Step4({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">
					AI Voice Mode Selection
				</h3>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-8 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-2 pb-4">
					<p className="text-sm text-[#656565]">
						We found the following business information. Please
						review and confirm before proceeding to train your AI
						assistant
					</p>
				</div>
				<div className="w-full bg-[#0A0A0A] rounded-xl border broder-[#7A7A7A] p-5 flex flex-col gap-4">
					<h5 className="text-base text-[#D7DDE7]">
						Agent Voice Mode
					</h5>

					<RadioGroup
						defaultValue="male"
						className="flex items-center gap-6 broder border-[#D5DBE2] px-6 py-4 rounded-md"
					>
						<div className="flex items-center gap-3">
							<RadioGroupItem value="male" id="male" />
							<Label htmlFor="male">Male</Label>
							<div className="w-6 h-6 bg-[#252525] border border-[#F1EFEF] flex items-center justify-center rounded-full">
								<Play size={10} className="text-[#697469]" />
							</div>
						</div>
						<div className="flex items-center gap-3">
							<RadioGroupItem value="female" id="female" />
							<Label htmlFor="female">Female</Label>
							<div className="w-6 h-6 bg-[#252525] border border-[#F1EFEF] flex items-center justify-center rounded-full">
								<Play size={10} className="text-[#697469]" />
							</div>
						</div>
					</RadioGroup>
				</div>

				<div className="w-full flex gap-4 items-center py-6">
					<Button className="w-full">Go Back</Button>
					<Button className="w-full" onClick={next} variant="primary">
						Yes, Train My Agent
					</Button>
				</div>
			</div>
		</div>
	);
}

function Step5({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">Booking Management</h3>
				<p className="text-[#656565] text-base">
					Wait a moment we are training your agent with your business
					data
				</p>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-16 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-3">
					<Label>Where should your bookings be managed?</Label>
					<span className="text-sm text-[#656565]">
						Enter one by one
					</span>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Choose one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>
									<div className="w-full flex items-center justify-between">
										<span className="text-[#C9CACC] text-sm">
											Default Inquiri.ai Mangement
										</span>
										<span className="text-sm font-medium text-[#D7D9FB]">
											Free
										</span>
									</div>
								</SelectLabel>
								<SelectItem value="simpro">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Simpro}
												alt="Simpro"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
								<SelectItem value="tradify">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Tradify}
												alt="Tradify"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
								<SelectItem value="calendly">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Calendly}
												alt="Calendly"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<Button
					onClick={next}
					variant="primary"
					className="w-full mt-16 mb-8"
				>
					Continue
				</Button>
			</div>
		</div>
	);
}

function Step6({ next }: { next: () => void }) {
	return (
		<div className="flex flex-col gap-0 shadow-lg">
			<div className="w-full flex flex-col gap-3 rounded-3xl rounded-br-none rounded-bl-none bg-[#0F0F0F] border border-[#0F0F0F] p-5 px-8">
				<h3 className="font-semibold text-xl">Calendar Management</h3>
				<p className="text-[#656565] text-base">
					Wait a moment we are training your agent with your business
					data
				</p>
			</div>
			<div className="w-full bg-[#0A0A0A] border border-[#141414] pt-16 px-16 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-3">
					<Label>Where should your bookings be managed?</Label>
					<span className="text-sm text-[#656565]">
						Enter one by one
					</span>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Choose one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>
									<div className="w-full flex items-center justify-between">
										<span className="text-[#C9CACC] text-sm">
											Default Inquiri.ai Mangement
										</span>
										<span className="text-sm font-medium text-[#D7D9FB]">
											Free
										</span>
									</div>
								</SelectLabel>
								<SelectItem value="simpro">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Simpro}
												alt="Simpro"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
								<SelectItem value="tradify">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Tradify}
												alt="Tradify"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
								<SelectItem value="calendly">
									<div className="w-full gap-10 flex items-center justify-between">
										<div className="flex flex-1 items-center justify-center">
											<img
												src={Calendly}
												alt="Calendly"
												className="w-full"
											/>
										</div>
										<span className="flex items-end justify-end">
											<Gem size={16} color="#FAAD29" />
										</span>
									</div>
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<Button
					// onClick={next}
					variant="primary"
					className="w-full mt-16 mb-8"
				>
					Confirm Setup
				</Button>
			</div>
		</div>
	);
}
