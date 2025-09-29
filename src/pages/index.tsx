import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import HeroBanner from "@/assets/images/hero-banner.svg";
import HeroWaves from "@/assets/images/hero-waves.svg";
import ServiceM8 from "@/assets/images/service-m8.svg";
import Simpro from "@/assets/images/simpro.svg";
import Tradify from "@/assets/images/tradify.svg";
import Jobber from "@/assets/images/jobber.svg";
import Calendly from "@/assets/images/calendly.svg";
import MicrosoftBooking from "@/assets/images/microsoft-booking.svg";
import GoogleCalendar from "@/assets/images/google-calendar.svg";
import SquareAppointments from "@/assets/images/square-appointments.svg";
import MicrosoftOutlook from "@/assets/images/microsoft-outlook.svg";
import Zoho from "@/assets/images/zoho.svg";
import HubSpot from "@/assets/images/hubspot.svg";
import PhoneCall from "@/assets/images/phone-call.svg";
import Envelope from "@/assets/images/envelope.svg";
import Scheduling from "@/assets/images/scheduling.svg";
import Cash from "@/assets/images/cash.svg";
import Messaging from "@/assets/images/messaging.svg";
import AI from "@/assets/images/ai.svg";
import Booking from "@/assets/images/booking.svg";
import Train from "@/assets/images/train.svg";
import Users from "@/assets/images/users.svg";
import LandingPagePhoneMockup from "@/assets/images/landing-page-phone-mockup.svg";
import WavesBG from "@/assets/images/waves-bg.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PhoneCallDemo from "@/components/common/phone-call-demo";
import MissedCallSection from "@/components/common/missed-call";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientInput } from "@/components/ui/gradient-input";

const faqs = [
	{
		question: "What is field service management?",
		answer: "Field service management (FSM) is the process of managing a company's field operations through a mobile workforce. It involves scheduling, dispatching, and tracking field technicians, managing work orders, and ensuring efficient service delivery.",
	},
	{
		question: "What are the benefits of field service management?",
		answer: "Benefits include improved efficiency, reduced operational costs, better customer satisfaction, real-time tracking, and optimized resource allocation.",
	},
	{
		question: "How much does field service management cost?",
		answer: "The cost varies depending on the software provider, features, and scale of use. It can range from $20 to $200 per user per month, with additional costs for customization or integrations.",
	},
	{
		question: "What are the common features of field service management?",
		answer: "Common features include work order management, scheduling, GPS tracking, inventory management, invoicing, and customer portals.",
	},
	{
		question: "Factors to consider when buying field service management?",
		answer: "Consider scalability, ease of use, integration capabilities, customer support, cost, and specific industry needs when choosing an FSM solution.",
	},
	{
		question: "Who needs field service management?",
		answer: "Industries such as HVAC, plumbing, electrical services, telecommunications, and IT support commonly need FSM to manage their field operations efficiently.",
	},
];

const Index = () => {
	return (
		<>
			<div className="min-h-screen max-h-[500px] relative text-dark-foreground-500">
				<div className="container grid grid-cols-2 gap-8">
					<div className="flex flex-col gap-4 pt-40">
						<h1 className="font-arialRounded w-[70%] leading-snug text-5xl">
							Turn every call into an opportunity with
						</h1>
						<img src={Logo} alt="Inquri AI" className="w-52" />

						<p className="font-openSans font-normal text-base py-4">
							While you're focused on growing your business,
							Inquri AI ensures every incoming call is
							professionally handled, converting leads and
							inquiries into meaningful outcomes. It's efficient,
							intelligent, and always on.
						</p>

						<div className="w-full flex items-center justify-start gap-4">
							<Button variant="secondary-capsul" size="lg">
								Get Started Now
							</Button>

							<Button variant="primary-capsul" size="lg">
								<div className="flex items-center justify-center p-1 border border-dark-foreground-500 rounded-full">
									<Play size={20} />
								</div>
								Watch Demo
							</Button>
						</div>
					</div>
					<div className=" flex relative items-center justify-center pt-40">
						<img
							src={HeroBanner}
							alt="Inquri AI"
							className="max-w-full shadow-[0px_0px_90.6px_rgba(255,255,255,0.42)] absolute -right-10 border border-dark-foreground-500 rounded-lg"
						/>
						<div className="w-20 h-20 absolute left-1/2 shadow-[0px_0px_13.05px_rgba(251,251,251,0.45)] translate-x-1/2 flex z-10 items-center justify-center bg-[#315738]/80 rounded-full cursor-pointer">
							<Play
								className="text-dark-foreground-500 fill-dark-foreground-500"
								size={24}
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center py-8 absolute bottom-0 -z-10">
					<img src={HeroWaves} alt="" className="w-full" />
				</div>
			</div>

			<div className="w-full py-12">
				<div className="container">
					<div className="w-full py-4 flex items-center justify-center pb-4">
						<h3 className="text-dark-foreground-500 text-xl font-light tracking-wide uppercase">
							Our Service features
						</h3>
					</div>

					<div className="grid grid-cols-7 items-center justify-center py-12 gap-8">
						<div className="w-full flex items-center justify-center">
							<img
								src={ServiceM8}
								alt="ServiceM8"
								className="max-w-full"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img src={Simpro} alt="Simpro" className="w-full" />
						</div>

						<div classNamemax-="w-full flex items-center justify-center">
							<img
								src={Tradify}
								alt="Tradify"
								className="max-w-full"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img src={Jobber} alt="Jobber" className="w-full" />
						</div>

						<div classNamemax-="w-full flex items-center justify-center">
							<img
								src={Calendly}
								alt="ServiceM8"
								className="max-w-full"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img
								src={MicrosoftBooking}
								alt="ServiceM8"
								className="max-w-full"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img
								src={GoogleCalendar}
								alt="ServiceM8"
								className="max-w-full"
							/>
						</div>
					</div>
					<div className="w-full flex items-center justify-center gap-2">
						<div className="w-full flex items-center justify-center">
							<img
								src={SquareAppointments}
								alt="ServiceM8"
								className="w-[50%]"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img
								src={MicrosoftOutlook}
								alt="ServiceM8"
								className="w-[50%]"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img
								src={Zoho}
								alt="ServiceM8"
								className="w-[50%]"
							/>
						</div>

						<div className="w-full flex items-center justify-center">
							<img
								src={HubSpot}
								alt="ServiceM8"
								className="w-[50%]"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full py-12">
				<div className="container">
					<div className="w-full flex flex-col gap-2 items-center">
						<h3 className="font-arialRounded text-4xl">
							How It{" "}
							<span className="text-primary-500">Works</span>
						</h3>
						<p className="font-openSans text-sm font-normal">
							Utilize the voice AI API and our intuitive{" "}
						</p>
					</div>

					<div className="w-[80%] mx-auto grid grid-cols-3 grid-rows-2 gap-6 py-12">
						<div className="w-full border-2 border-primary-500 rounded-2xl p-5 flex flex-col gap-3 items-start justify-start bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]">
							<h4 className="text-3xl font-semibold text-[#D7D9FB]">
								01
							</h4>

							<h5 className="text-2xl font-normal text-[#D7D9FB]">
								AI Phone Answering
							</h5>
							<p className="text-[#686868] text-sm font-openSans font-normal">
								Utilize the voice AI API and our intuitive agent
								builder to create custom voice AI agents
								effortlessly.
							</p>
						</div>

						<div className="w-full border border-primary-500/30 rounded-2xl p-5 flex flex-col gap-3 items-start justify-start bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]">
							<h4 className="text-3xl font-semibold text-[#D7D9FB]">
								02
							</h4>

							<h5 className="text-2xl font-normal text-[#D7D9FB]">
								Booking Manager
							</h5>
							<p className="text-[#686868] text-sm font-openSans font-normal">
								Utilize the voice AI API and our intuitive agent
								builder to create custom voice AI agents
								effortlessly.
							</p>
						</div>

						<div className="row-span-2 w-full border border-primary-500/30 rounded-2xl p-5 flex flex-col gap-3 items-center justify-center bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]">
							<h5 className="text-3xl font-normal text-[#D7D9FB]">
								Animation
							</h5>
						</div>

						<div className="w-full border border-primary-500/30 rounded-2xl p-5 flex flex-col gap-3 items-start justify-start bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]">
							<h4 className="text-3xl font-semibold text-[#D7D9FB]">
								03
							</h4>

							<h5 className="text-2xl font-normal text-[#D7D9FB]">
								Customize AI
							</h5>
							<p className="text-[#686868] text-sm font-openSans font-normal">
								Utilize the voice AI API and our intuitive agent
								builder to create custom voice AI agents
								effortlessly.{" "}
							</p>
						</div>

						<div className="w-full border border-primary-500/30 rounded-2xl p-5 flex flex-col gap-3 items-start justify-start bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]">
							<h4 className="text-3xl font-semibold text-[#D7D9FB]">
								04
							</h4>

							<h5 className="text-2xl font-normal text-[#D7D9FB]">
								CRM Integration
							</h5>
							<p className="text-[#686868] text-sm font-openSans font-normal">
								Utilize the voice AI API and our intuitive agent
								builder to create custom voice AI agents
								effortlessly.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full py-12">
				<div className="container">
					<div className="w-full flex flex-col gap-2 items-center">
						<h3 className="font-arialRounded text-4xl">Features</h3>
						<p className="font-openSans text-sm font-normal">
							TOTC is one powerful online software suite that
						</p>
					</div>

					<div className="w-[100%] mx-auto grid grid-cols-3 grid-rows-auto gap-16 py-12">
						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img
									src={PhoneCall}
									alt=""
									className="w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Call Answering
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img
									src={Envelope}
									alt=""
									className="w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Email Responder
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img
									src={Messaging}
									alt=""
									className="w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Text Messaging
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img
									src={Scheduling}
									alt=""
									className="w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Smart Scheduling
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img src={AI} alt="" className="w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									24/7 Active AI
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img src={Users} alt="" className="w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									CRM Integration
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img src={Booking} alt="" className="w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Booking Management
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img src={Train} alt="" className="w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Train AI Agent
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="w-full flex items-start gap-4">
							<div className="flex items-center justify-center rounded-lg w-24 h-16 bg-[linear-gradient(to_bottom,#1F1F1F_0%,#090909_100%)]">
								<img src={Cash} alt="" className="w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Easy Payment
								</h3>
								<p className="text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full py-12 relative">
				<img
					src={WavesBG}
					className="-z-10 absolute top-3/4 -translate-y-1/2 left-0 w-full"
					alt=""
				/>
				<div className="container">
					<div className="w-full flex items-center justify-between gap-4">
						<div className="flex flex-col gap-3 items-start">
							<h3 className="font-arialRounded text-4xl">
								Try Our{" "}
								<span className="text-primary-500">
									Live Demo
								</span>
							</h3>
							<p className="font-openSans text-base font-normal">
								Effortlessly schedule meetings,
							</p>
						</div>

						<div className="flex items-center justify-between gap-20">
							<div className="flex flex-col gap-3">
								<h4 className="text-primary-500 font-semibold text-2xl">
									10m+
								</h4>
								<p className="text-[#DADADA] font-medium text-base">
									Happy People
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<h4 className="text-primary-500 font-semibold text-2xl">
									4.88
								</h4>

								<div className="flex items-center justify-center gap-1">
									{Array.from({ length: 4 }, (_, i) => (
										<Star
											className="fill-yellow-500 text-yellow-500"
											size={16}
											key={i}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="w-full grid grid-cols-2 gap-4 py-16 items-center">
						<div className="flex items-center justify-center">
							<img
								src={LandingPagePhoneMockup}
								alt=""
								className="max-w-full"
							/>
						</div>
						<div className="rounded-lg p-6 px-8 border border-[#B0B0B0]/40 bg-black shadow-[-30px_5px_0px_rgba(13,13,13,0.41)] flex items-start justify-start w-[60%] flex-col gap-5 h-min">
							<h3 className="text-3xl font-semibold text-primary-500 font-arialRounded">
								Have a call now
							</h3>

							<div className="w-full form-group flex flex-col gap-4 py-2">
								<Label className="text-[#D7D9FB]">
									Full Name
								</Label>
								<GradientInput
									placeholder="Enter your full name"
									className="text-white"
								/>
							</div>

							<div className="w-full form-group flex flex-col gap-4 py-2">
								<Label className="text-[#D7D9FB]">
									Phone Number
								</Label>
								<GradientInput
									placeholder="Enter your phone number"
									className="text-white"
								/>
							</div>

							<div className="w-full form-group flex flex-col gap-4 py-2">
								<Label className="text-[#D7D9FB]">Email</Label>
								<GradientInput
									placeholder="Enter your email"
									className="text-white"
								/>
							</div>

							<Button
								variant="primary"
								size="lg"
								className="rounded-lg w-full"
							>
								Demo Call
							</Button>
						</div>
					</div>
				</div>
			</div>

			<PhoneCallDemo />
			<MissedCallSection />

			{/* faq */}

			<div className="w-full py-12">
				<div className="container grid grid-cols-2 gap-20">
					<div className="flex items-center justify-center">
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger className="text-left">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>

					<div className="flex flex-col gap-4 pl-20">
						<div className="w-full flex items-center">
							<img src={Logo} alt="Inquiri AI" className="w-52" />
						</div>
						<h2 className="text-[#D7D9FB] text-4xl">
							Frequently <br />
							Asked Questions
						</h2>
						<p className="w-[60%] text-base text-[#696984]">
							A missed call can easily become a missed
							opportunity. Most prospects won’t wait or leave a
							voicemail—they’ll just move on to someone else.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
