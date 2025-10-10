import { Button } from "@/components/ui/button";
import { pricingPlans } from "./Pricing";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function PricingDashboard() {
	return (
		<section className="w-full pb-8">
			<div className="w-[90%] mx-auto bg-[#0D0D0D] rounded-3xl p-8 flex flex-col gap-3">
				{/* heading */}
				<div className="w-full items-center flex flex-col gap-1">
					<h3 className="text-[#D0CDEF] text-xl font-medium">
						Our Pricing Plan
					</h3>
					<span className="text-sm font-normal text-[#D0CDEF]">
						Find your best package here
					</span>
				</div>

				<div className="w-full rounded-md border border-[#575757] p-5 grid grid-cols-3 gap-3 mt-5">
					<div className="w-full flex flex-col gap-2">
						<h5 className="text-[#D0CDEF] text-base font-normal">
							Date of Starting
						</h5>
						<span className="text-xs font-normal text-[#D0CDEF]">
							12 July, 2024
						</span>
					</div>

					<div className="w-full flex flex-col items-center gap-2">
						<h5 className="text-[#D0CDEF] text-base font-normal">
							Membership (Freebie)
						</h5>
						<Button variant="primary" className="w-[200px]">
							Cancel
						</Button>
					</div>

					<div className="w-full flex flex-col items-end gap-2">
						<h5 className="text-[#D0CDEF] text-base font-normal">
							Renewal Date
						</h5>
						<span className="text-xs font-normal text-[#D0CDEF]">
							12 July, 2024
						</span>
					</div>
				</div>

				<div className="w-full">
					<div className="grid md:grid-cols-3 gap-16 container items-center">
						{pricingPlans.map((plan) => (
							<div
								key={plan.name}
								className="relative h-auto mt-24"
							>
								<div
									className={
										"p-[2px] h-full relative rounded-[32px] border border-[#514F6E]"
									}
								>
									{plan.featured && (
										<div className="w-[100.5%] rounded-bl-none rounded-br-none rounded-[32px] border-b-0 border-[0.01px] border-[#00FF00]/40 bg-[#1B1B1B] flex items-center absolute text-center -left-[0.5px] -top-24 h-32 -z-10">
											<h4 className="text-xl w-full text-center pb-6">
												Standard
											</h4>
										</div>
									)}
									<Card
										className={`p-8 rounded-[32px] bg-black py-12 h-full border-0 flex flex-col z-10`}
									>
										<div className="flex-1 space-y-8 mb-12 pt-24">
											<div
												className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
													plan.featured
														? "bg-[#020702] drop-shadow-[0_1.03px_2.06px_rgba(74,58,255,15)]"
														: "bg-[rgba(81,79,110,0.25)] border border-[#6F6C8F]"
												}`}
											>
												<img
													src={plan.icon}
													alt=""
													className="w-6 h-6"
												/>
											</div>

											<h3 className="text-2xl font-bold text-[#D8E1EB] mb-3">
												{plan.name}
											</h3>

											<p className="text-[#A0A3BD] text-sm mb-6">
												{plan.subtitle}
											</p>

											<ul className="space-y-3 mb-8 text-[#A0A3BD]">
												{plan.features.map(
													(feature, index) => (
														<li
															key={index}
															className="text-muted-foreground text-sm"
														>
															{feature}
														</li>
													)
												)}
											</ul>

											<div className="mb-8">
												<div className="flex items-baseline">
													<span className="text-5xl font-bold text-[#D8E1EB]">
														{plan.price}
													</span>
													{plan.period && (
														<span className="text-[#D9DBE9] ml-1">
															{plan.period}
														</span>
													)}
												</div>
											</div>
										</div>

										<Link to={"/onboarding"}>
											<Button
												variant={plan.buttonVariant}
												size="lg"
												className={`w-full rounded-xl`}
											>
												{plan.buttonText}
											</Button>
										</Link>
									</Card>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
