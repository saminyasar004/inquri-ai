import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Check, Edit, Play, X } from "lucide-react";
import { useRef, useState } from "react";

export default function TrainAgent() {
	const [selectedTab, setSelectedTab] = useState<
		"basicInfo" | "links" | "questions" | "notification"
	>("basicInfo");

	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 py-1">
				<div className="flex items-center w-full flex-col gap-1">
					<h3 className="text-3xl text-primary font-semibold">
						Train Agent
					</h3>
				</div>
			</div>
			<div className="py-5">
				<div className="flex items-center justify-start gap-2">
					<div
						className={cn(
							"border-b-2 py-1 cursor-pointer rounded-md rounded-bl-none rounded-br-none p-2",
							selectedTab === "basicInfo"
								? "border-primary-500 *:text-primary-500 bg-gradient-to-b from-[#214121] to-[#0D0D0D]"
								: "border-transparent bg-transparent"
						)}
						onClick={() => setSelectedTab("basicInfo")}
					>
						<h6 className="pointer-events-none">Basic Info</h6>
					</div>

					<div
						className={cn(
							"border-b-2 py-1 cursor-pointer rounded-md rounded-bl-none rounded-br-none p-2",
							selectedTab === "links"
								? "border-primary-500 *:text-primary-500 bg-gradient-to-b from-[#214121] to-[#0D0D0D]"
								: "border-transparent bg-transparent"
						)}
						onClick={() => setSelectedTab("links")}
					>
						<h6 className="pointer-events-none">Links Set Up</h6>
					</div>

					<div
						className={cn(
							"border-b-2 py-1 cursor-pointer rounded-md rounded-bl-none rounded-br-none p-2",
							selectedTab === "questions"
								? "border-primary-500 *:text-primary-500 bg-gradient-to-b from-[#214121] to-[#0D0D0D]"
								: "border-transparent bg-transparent"
						)}
						onClick={() => setSelectedTab("questions")}
					>
						<h6 className="pointer-events-none">Questions</h6>
					</div>

					<div
						className={cn(
							"border-b-2 py-1 cursor-pointer rounded-md rounded-bl-none rounded-br-none p-2",
							selectedTab === "notification"
								? "border-primary-500 *:text-primary-500 bg-gradient-to-b from-[#214121] to-[#0D0D0D]"
								: "border-transparent bg-transparent"
						)}
						onClick={() => setSelectedTab("notification")}
					>
						<h6 className="pointer-events-none">Notification</h6>
					</div>
				</div>

				{selectedTab === "basicInfo" && <BasicInfo />}
				{selectedTab === "links" && <Links />}
				{selectedTab === "questions" && <Questions />}
				{selectedTab === "notification" && <Notification />}
			</div>
		</section>
	);
}

function BasicInfo() {
	const profilePictureInputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="w-full flex flex-col gap-6 py-4">
			<div className="w-full flex flex-col gap-2 border-b border-[#575757] py-3">
				<h5 className="text-[#E6E6E6] text-xl font-medium">
					Basic Business Informations
				</h5>
				<p className="text-[#8B8B8B] text-sm font-normal">
					Lorem Ipsum is simply dummy text of the printing and type
				</p>
			</div>
			<div className="form-group w-full grid grid-cols-2 gap-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="businessName">Business Name</Label>
					<Input
						id="businessName"
						type="text"
						placeholder="Enter Business Name"
					/>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="businessWebsite">Website</Label>
					<Input
						id="businessWebsite"
						type="text"
						placeholder="Enter here"
					/>
				</div>
			</div>

			<div className="form-group w-full grid grid-cols-2 gap-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="streetAddress">Street Address</Label>
					<Input
						id="streetAddress"
						type="text"
						placeholder="Enter here"
					/>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="profilePicture">
						Upload profile picture
					</Label>
					<div className="w-full border flex items-center flex-row gap-4 border-[#404040] p-3 py-2 rounded-lg bg-[#0D0D0D]">
						<Button
							variant="default"
							onClick={() =>
								profilePictureInputRef.current?.click()
							}
						>
							Choose File
						</Button>
						<input
							ref={profilePictureInputRef}
							id="profilePicture"
							type="file"
							className="hidden"
						/>
						<span className="text-[#6B6D6E] text-sm">
							a;sdjlkgjadslg;lasd.jpg
						</span>
					</div>
				</div>
			</div>

			<div className="w-full form-group grid grid-cols-2 gap-4">
				<div className="w-full grid grid-cols-3 gap-3">
					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="city">City</Label>
						<Input id="city" type="text" placeholder="Enter here" />
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="state">State</Label>
						<Input
							id="state"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="zip">Zip</Label>
						<Input id="zip" type="text" placeholder="Enter here" />
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="country">Country</Label>
						<Input
							id="country"
							type="text"
							placeholder="Enter here"
						/>
					</div>
					<div className="w-full flex flex-col col-span-2 gap-3">
						<Label htmlFor="phone">Phone</Label>
						<Input
							id="phone"
							type="text"
							placeholder="Enter here"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="businessServiceDescription">
						Business and services description
					</Label>
					<Textarea
						rows={8}
						id="businessServiceDescription"
						placeholder="Enter here"
					/>
				</div>
			</div>

			<div className="w-full flex items-center justify-end py-3">
				<div className="flex items-center flex-row gap-4">
					<Button>Cancel</Button>
					<Button variant="primary">Save Changes</Button>
				</div>
			</div>

			<div className="w-full py-6 border border-l-0 border-r-0 border-[#575757]">
				<div className="w-full flex flex-col gap-2 pb-6">
					<h5 className="text-[#E6E6E6] text-xl font-medium">
						Configure AI Agent
					</h5>
					<p className="text-[#8B8B8B] text-sm font-normal">
						Lorem Ipsum is simply dummy text of the printing and
						type
					</p>
				</div>

				<div className="form-group w-full grid grid-cols-2 gap-6 pb-5">
					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="greeting">Greeting Message</Label>
						<Input
							id="greeting"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="country">Agent Name</Label>
						<Input
							id="agentName"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="flex flex-col gap-4">
						<Label className="text-sm font-normal">
							Agent Voice Mode
						</Label>

						<div className="w-full rounded-lg border broder-[#ABAFB4] p-3 flex flex-col gap-4">
							<RadioGroup
								defaultValue="male"
								className="flex items-center gap-6 broder border-[#ABAFB4] px-6 py-1 rounded-md"
							>
								<div className="flex items-center gap-3">
									<RadioGroupItem value="male" id="male" />
									<Label htmlFor="male">Male</Label>
									<div className="w-6 h-6 bg-[#252525] border border-[#F1EFEF] flex items-center justify-center rounded-full">
										<Play
											size={10}
											className="text-[#697469]"
											fill="#697469"
										/>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<RadioGroupItem
										value="female"
										id="female"
									/>
									<Label htmlFor="female">Female</Label>
									<div className="w-6 h-6 bg-[#252525] border border-[#F1EFEF] flex items-center justify-center rounded-full">
										<Play
											size={10}
											className="text-[#697469]"
											fill="#697469"
										/>
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<Label className="text-sm font-normal">
							Spam/Solicitation Filtering
						</Label>

						<div className="flex items-center flex-row gap-3">
							<div className="w-5 h-5 p-0.5 rounded-full bg-primary-500 flex items-center justify-center">
								<Check size={20} color="#252525" />
							</div>

							<span className="text-sm text-[#BEBDBD]">
								Automatically rejects spam calls
							</span>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-end py-3">
					<div className="flex items-center flex-row gap-4">
						<Button>Cancel</Button>
						<Button variant="primary">Save Changes</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Links() {
	return (
		<div className="w-full flex flex-col gap-6 py-4">
			<div className="w-full flex items-center justify-between gap-4">
				<div className="w-full flex flex-col gap-2 py-3">
					<h5 className="text-[#E6E6E6] text-xl font-medium">
						Custom Text Link
					</h5>
					<p className="text-[#8B8B8B] text-sm font-normal">
						Configure text links that the AI agent can offer to send
						to callers based on their demand
					</p>
				</div>

				<Button variant="link">Add Link</Button>
			</div>

			<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] py-2">
				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="flex flex-col gap-3">
						<Label htmlFor="callerScenario">Caller Scenario</Label>
						<Textarea
							rows={3}
							id="callerScenario"
							placeholder="Ex. Caller asks for booking link"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="urlLink">Url Link</Label>
						<Textarea
							rows={3}
							id="urlLink"
							placeholder="Enter here"
						/>
					</div>

					<div className="flex flex-row gap-3">
						<div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center p-1">
							<Check size={20} color="#252525" />
						</div>

						<span className="text-primary-500 text-base font-normal">
							Active
						</span>
					</div>
				</div>
				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="flex flex-col gap-3">
						<Label htmlFor="callerScenario">Caller Scenario</Label>
						<Textarea
							rows={3}
							id="callerScenario"
							placeholder="Ex. Caller asks for booking link"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="urlLink">Url Link</Label>
						<Textarea
							rows={3}
							id="urlLink"
							placeholder="Enter here"
						/>
					</div>

					<div className="flex flex-row gap-3">
						<div className="w-6 h-6 rounded-full bg-[#ABB6AB] flex items-center justify-center p-1">
							<X size={20} color="#252525" />
						</div>

						<span className="text-[#ABB6AB] text-base font-normal">
							Inactive
						</span>
					</div>
				</div>

				<div className="w-full flex items-center justify-end py-3 col-span-2">
					<div className="flex items-center flex-row gap-4">
						<Button>Cancel</Button>
						<Button variant="primary">Save Changes</Button>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between gap-4">
				<div className="w-full flex flex-col gap-2 py-3">
					<h5 className="text-[#E6E6E6] text-xl font-medium">
						Call Transfer Rules
					</h5>
					<p className="text-[#8B8B8B] text-sm font-normal">
						Define rules for when and how the AI agent should
						transfer calls to a human.
					</p>
				</div>

				<Button variant="link">Add Link</Button>
			</div>

			<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] py-2">
				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="flex flex-col gap-3">
						<Label htmlFor="callerScenario">Caller Scenario</Label>
						<Textarea
							rows={3}
							id="callerScenario"
							placeholder="Ex. Caller asks for booking link"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="transferMessage">
							Message before Transfer
						</Label>
						<Textarea
							rows={3}
							id="transferMessage"
							placeholder="Enter here"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="number">Number</Label>
						<Input id="number" placeholder="Enter here" />
					</div>

					<div className="flex flex-row gap-3">
						<div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center p-1">
							<Check size={20} color="#252525" />
						</div>

						<span className="text-primary-500 text-base font-normal">
							Active
						</span>
					</div>
				</div>

				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="flex flex-col gap-3">
						<Label htmlFor="callerScenario">Caller Scenario</Label>
						<Textarea
							rows={3}
							id="callerScenario"
							placeholder="Ex. Caller asks for booking link"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="transferMessage">
							Message before Transfer
						</Label>
						<Textarea
							rows={3}
							id="transferMessage"
							placeholder="Enter here"
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="number">Number</Label>
						<Input id="number" placeholder="Enter here" />
					</div>

					<div className="flex flex-row gap-3">
						<div className="w-6 h-6 rounded-full bg-[#ABB6AB] flex items-center justify-center p-1">
							<X size={20} color="#252525" />
						</div>

						<span className="text-[#ABB6AB] text-base font-normal">
							Inactive
						</span>
					</div>
				</div>

				<div className="w-full flex items-center justify-end py-3 col-span-2">
					<div className="flex items-center flex-row gap-4">
						<Button>Cancel</Button>
						<Button variant="primary">Save Changes</Button>
					</div>
				</div>
			</div>

			<div className="w-full grid grid-cols-2 gap-4 py-4">
				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="w-full flex items-start justify-between gap-3 border-b border-[#9C9C9C]/20 pb-3">
						<div className="flex flex-col gap-2">
							<h4 className="text-[#E6E6E6] text-base font-medium">
								CRM set up
							</h4>
							<p className="text-[#595959] text-sm font-normal">
								Define rules for when and how the AI agent
								should transfer calls to a human. Drag the
								priority sequence
							</p>
						</div>

						<Button variant="link">
							<Edit />
							Edit
						</Button>
					</div>

					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="w-full flex items-center justify-between gap-4"
						>
							<div className="flex flex-row gap-3">
								<svg
									className="w-5 h-5 mr-2"
									viewBox="0 0 24 24"
								>
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								<span className="text-[#56596C] text-sm font-normal">
									Inquiri.ai CRM
								</span>
							</div>
							<Button variant="link">Default</Button>
						</div>
					))}
				</div>

				<div className="bg-[#090909] rounded-lg flex flex-col gap-4 p-6">
					<div className="w-full flex items-start justify-between gap-3 border-b border-[#9C9C9C]/20 pb-3">
						<div className="flex flex-col gap-2">
							<h4 className="text-[#E6E6E6] text-base font-medium">
								Calendar set up
							</h4>
							<p className="text-[#595959] text-sm font-normal">
								Define rules for when and how the AI agent
								should transfer calls to a human. Drag the
								priority sequence
							</p>
						</div>

						<Button variant="link">
							<Edit />
							Edit
						</Button>
					</div>

					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="w-full flex items-center justify-between gap-4"
						>
							<div className="flex flex-row gap-3">
								<svg
									className="w-5 h-5 mr-2"
									viewBox="0 0 24 24"
								>
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								<span className="text-[#56596C] text-sm font-normal">
									Inquiri.ai CRM
								</span>
							</div>
							<Button variant="link">Default</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function Questions() {
	return (
		<div className="w-full flex flex-col gap-6 py-4">
			<div className="w-full flex items-center justify-between gap-4">
				<div className="w-full flex flex-col gap-2 py-3">
					<h5 className="text-[#E6E6E6] text-xl font-medium">
						Primary Questions
					</h5>
					<p className="text-[#8B8B8B] text-sm font-normal">
						Add questions your agent will ask to get some
						informations
					</p>
				</div>

				<Button variant="link">Add Link</Button>
			</div>

			<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] pb-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="question1">Question 1</Label>
					<Input
						id="question1"
						type="text"
						placeholder="Enter here"
					/>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="question2">Question 2</Label>
					<Input
						id="question2"
						type="text"
						placeholder="Enter here"
					/>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="question3">Question 3</Label>
					<Input
						id="question3"
						type="text"
						placeholder="Enter here"
					/>
				</div>

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="question4">Question 4</Label>
					<Input
						id="question4"
						type="text"
						placeholder="Enter here"
					/>
				</div>

				<div className="w-full flex items-center justify-end py-3 col-span-2">
					<div className="flex items-center flex-row gap-4">
						<Button>Cancel</Button>
						<Button variant="primary">Save Changes</Button>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col gap-5">
				<div className="w-full flex items-center justify-between gap-4">
					<div className="w-full flex flex-col gap-2 py-3">
						<h5 className="text-[#E6E6E6] text-xl font-medium">
							Frequently Asked Questions
						</h5>
						<p className="text-[#8B8B8B] text-sm font-normal">
							Add questions your agent will ask to get some
							informations
						</p>
					</div>

					<div className="flex flex-row gap-5">
						<Button variant="link" className="px-0">
							<Edit /> Industry
						</Button>
						<Button variant="link" className="px-0">
							Add Link
						</Button>
					</div>
				</div>

				<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] pb-8">
					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>
				</div>

				<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] pb-8">
					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>
				</div>

				<div className="w-full grid grid-cols-2 gap-4 border-b border-[#575757] pb-8">
					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="question">Question</Label>
						<Input
							id="question"
							type="text"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>

					<div className="w-full flex flex-col gap-3">
						<Label htmlFor="answer">Answer</Label>
						<Textarea
							rows={5}
							id="answer"
							placeholder="Enter here"
						/>
					</div>
				</div>

				<div className="w-full flex items-center justify-end py-3">
					<div className="flex items-center flex-row gap-4">
						<Button>Cancel</Button>
						<Button variant="primary">Save Changes</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Notification() {
	const profilePictureInputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="w-full flex flex-col gap-6 py-4">
			<div className="w-full flex flex-col gap-2 border-b border-[#575757] py-3">
				<h5 className="text-[#E6E6E6] text-xl font-medium">
					Email Notifications
				</h5>
				<p className="text-[#8B8B8B] text-sm font-normal">
					Configure email summaries for call actrivity
				</p>
			</div>
			<div className="form-group w-full grid grid-cols-2 gap-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="summeries">Type of Summeries</Label>
					<Select>
						<SelectTrigger className="w-full h-14">
							<SelectValue placeholder="Select one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
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

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="email">Send email to</Label>
					<Input id="email" type="text" placeholder="Enter here" />
				</div>

				<div className="flex flex-col gap-3">
					<div className="flex flex-row gap-3">
						<div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center p-0.5">
							<Check size={24} color="#252525" />
						</div>

						<span className="text-[#B2B2B2] text-sm font-normal">
							Include full transcript in email
						</span>
					</div>
					<p className="text-[#B2B2B2] text-sm font-normal">
						When enabled, emails will include the complete call
						transcript below the summery
					</p>
				</div>

				<p className="text-[#B2B2B2] text-sm font-normal">
					If it is blank, it will email to your default email
				</p>
			</div>

			<div className="w-full flex flex-col gap-2 border-b border-[#575757] py-3">
				<h5 className="text-[#E6E6E6] text-xl font-medium">
					SMS Notification
				</h5>
				<p className="text-[#8B8B8B] text-sm font-normal">
					Configure SMS summaries for call actrivity
				</p>
			</div>
			<div className="form-group w-full grid grid-cols-2 gap-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="summeries">Type of Summeries</Label>
					<Select>
						<SelectTrigger className="w-full h-14">
							<SelectValue placeholder="Select one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
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

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="email">Send SMS to</Label>
					<Input id="email" type="text" placeholder="Enter here" />
				</div>

				<p className="text-[#B2B2B2] text-sm font-normal">
					The type of call will be sent to webhook
				</p>

				<p className="text-[#B2B2B2] text-sm font-normal">
					Enter a mobile number to receive text summaries. Include
					country code (e.g., +61 for Australia)
				</p>
			</div>

			<div className="w-full flex flex-col gap-2 border-b border-[#575757] py-3">
				<h5 className="text-[#E6E6E6] text-xl font-medium">
					Webhook Notification
				</h5>
				<p className="text-[#8B8B8B] text-sm font-normal">
					Configure webhook POST request for call activities.
				</p>
			</div>
			<div className="form-group w-full grid grid-cols-2 gap-4">
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="summeries">Type of Summeries</Label>
					<Select>
						<SelectTrigger className="w-full h-14">
							<SelectValue placeholder="Select one" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
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

				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="email">Webhook URL</Label>
					<Input id="email" type="text" placeholder="Enter here" />
				</div>

				<p className="text-[#B2B2B2] text-sm font-normal">
					The type of call will be sent to webhook
				</p>

				<p className="text-[#B2B2B2] text-sm font-normal">
					Enter the URL to which we will send a post request with call
					data
				</p>
			</div>

			<div className="w-full flex items-center justify-end py-3">
				<div className="flex items-center flex-row gap-4">
					<Button>Cancel</Button>
					<Button variant="primary">Save Changes</Button>
				</div>
			</div>
		</div>
	);
}
