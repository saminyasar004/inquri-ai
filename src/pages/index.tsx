import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import HeroBanner from "@/assets/images/hero-banner.svg";
import HeroWaves from "@/assets/videos/hero-animation-waves.mp4";
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
import PhoneCallDemo from "@/components/common/phone-call-demo";
import MissedCallSection from "@/components/common/missed-call";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import HowItWorks from "@/components/sections/how-it-works";
import HomeBlog from "@/components/sections/home-blog";
import LiveDemoSection from "@/components/sections/live-demo";
import BrandCarousel from "@/components/common/brand-carousel";

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
                <div className="min-h-[calc(100svh-80px)] md:min-h-screen relative overflow-hidden text-dark-foreground-500 mb-0">
                    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4 pt-24 md:pt-40">
                            <h1 className="font-arialRounded w-full md:w-[70%] leading-snug text-3xl sm:text-4xl md:text-5xl">
                                Turn every call into an opportunity with
                            </h1>
                            <img src={Logo} alt="Inquri AI" className="w-40 md:w-52" />

						<p className="font-openSans font-normal text-base py-4">
							While you're focused on growing your business,
							Inquri AI ensures every incoming call is
							professionally handled, converting leads and
							inquiries into meaningful outcomes. It's efficient,
							intelligent, and always on.
						</p>

                            <div className="w-full flex items-stretch sm:items-center justify-start">
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    className="w-full sm:w-auto rounded-full px-8 h-14 text-[#40DF40] bg-[linear-gradient(to_bottom,#161616_0%,#0B0B0B_100%)] border border-[#40DF40] shadow-[0_0_14px_rgba(34,159,34,0.45)] transition-all duration-200 ease-out hover:!text-[#40DF40] hover:!bg-[linear-gradient(to_bottom,#1C1C1C_0%,#0E0E0E_100%)] hover:shadow-[0_0_30px_rgba(34,159,34,0.9)] active:scale-[0.98]"
                                >
                                    Get Started Now
                                </Button>
                            </div>
                        </div>
                        <div className=" flex relative items-center justify-center pt-6 md:pt-40 order-first md:order-none">
                        <img
                            src={HeroBanner}
                            alt="Inquri AI"
                            className="relative md:absolute md:-right-10 w-full max-w-[480px] sm:max-w-[560px] md:max-w-full shadow-[0px_0px_90.6px_rgba(255,255,255,0.42)] border border-dark-foreground-500 rounded-lg"
                        />
                        <div className="w-14 h-14 md:w-20 md:h-20 absolute left-1/2 shadow-[0px_0px_13.05px_rgba(251,251,251,0.45)] -translate-x-1/2 flex z-10 items-center justify-center bg-[#315738]/80 rounded-full cursor-pointer">
                            <Play
                                className="text-dark-foreground-500 fill-dark-foreground-500"
                                size={20}
                            />
                        </div>
                    </div>
                </div>

                
                <div className="w-full flex items-center justify-center py-8 absolute bottom-0 -z-10">
                
                    <video
                        className="w-full absolute -bottom-[120px] sm:-bottom-[160px] md:-bottom-[260px] transform -rotate-180"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={HeroWaves} type="video/mp4" />
                    </video>
                </div>
            </div>

			{/* Try Our Live Demo */}
			<LiveDemoSection />

			{/* Our Service features moved below the Features section */}
			<div className="w-full py-12 hidden">
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

			<HowItWorks />

			<div id="features" className="w-full py-12">
				<div className="container">
					<div className="w-full flex flex-col gap-2 items-center">
						<h3 className="font-arialRounded text-4xl">Features</h3>
						<p className="font-openSans text-sm font-normal">
							TOTC is one powerful online software suite that
						</p>
					</div>

						<div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12">
						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img
									src={PhoneCall}
									alt=""
									className="icon-img w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Call Answering
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img
									src={Envelope}
									alt=""
									className="icon-img w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Email Responder
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img
									src={Messaging}
									alt=""
									className="icon-img w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Text Messaging
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img
									src={Scheduling}
									alt=""
									className="icon-img w-[45%]"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									AI Smart Scheduling
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img src={AI} alt="" className="icon-img w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									24/7 Active AI
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img src={Users} alt="" className="icon-img w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									CRM Integration
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
								<img src={Booking} alt="" className="icon-img w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Booking Management
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
                                <img src={Train} alt="" className="icon-img w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Train AI Agent
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
									Simple and secure control of your
									organization’s financial and legal
									transactions. Send customized invoices and
									contracts
								</p>
							</div>
						</div>

						<div className="feature-card group w-full flex items-start gap-4">
							<div className="icon-tile rounded-lg">
                                <img src={Cash} alt="" className="icon-img w-[45%]" />
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="feature-title font-arialRounded font-semibold text-[#D7D9FB] text-2xl">
									Easy Payment
								</h3>
								<p className="feature-desc text-[#696984] font-normal text-sm font-openSans">
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

			{/* Our Service features → autoplay carousel */}
			<div className="w-full py-12 bg-black">
				<div className="container">
					<div className="w-full py-6 flex items-center justify-center mb-10">
						<h2 className="text-4xl font-light tracking-widest uppercase text-[#D7D9FB]">
							Our <span className="text-primary-500">Service</span> Features
						</h2>
					</div>
					{(() => {
						const brandItems = [
							{ src: ServiceM8, alt: "ServiceM8" },
							{ src: Simpro, alt: "Simpro" },
							{ src: Tradify, alt: "Tradify" },
							{ src: Jobber, alt: "Jobber" },
							{ src: Calendly, alt: "Calendly" },
							{ src: MicrosoftBooking, alt: "Microsoft Booking" },
							{ src: GoogleCalendar, alt: "Google Calendar" },
							{ src: SquareAppointments, alt: "Square Appointments" },
							{ src: MicrosoftOutlook, alt: "Microsoft Outlook" },
							{ src: Zoho, alt: "Zoho" },
							{ src: HubSpot, alt: "HubSpot" },
						];

						const splitIndex = Math.ceil(brandItems.length / 2);
						const firstRow = brandItems.slice(0, splitIndex);
						const secondRow = brandItems.slice(splitIndex);

						return (
							<div className="flex flex-col gap-8">
								{/* Top row: left -> right */}
                                <BrandCarousel items={firstRow} height={48} mobileHeight={24} speedMs={16000} direction="right" />
								{/* Bottom row: right -> left */}
                                <BrandCarousel items={secondRow} height={48} mobileHeight={24} speedMs={17000} direction="left" />
							</div>
						);
					})()}
				</div>
			</div>

			<PhoneCallDemo />
			<MissedCallSection />

			{/* Blog carousel before FAQ */}
			<HomeBlog />

			{/* faq */}

				<div id="faq" className="w-full py-12">
					<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
						<div className="flex items-center justify-center order-2 lg:order-1">
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

						<div className="flex flex-col gap-4 pl-0 lg:pl-20 order-1 lg:order-2">
						<div className="w-full flex items-center">
							<img src={Logo} alt="Inquiri AI" className="w-52" />
						</div>
						<h2 className="text-[#D7D9FB] text-4xl">
							Frequently <br />
							Asked Questions
						</h2>
							<p className="w-full lg:w-[60%] text-base text-[#696984]">
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
