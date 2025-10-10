import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Rocket, Crown } from "lucide-react";
import PricingTrialIcon from "@/assets/images/pricing-trial-icon.svg";
import PricingBasicIcon from "@/assets/images/pricing-basic-icon.svg";
import PricingProIcon from "@/assets/images/pricing-pro-icon.svg";
import { Link } from "react-router-dom";

export const pricingPlans = [
	{
		name: "Trial",
		icon: PricingTrialIcon,
		subtitle: "Temporary Number (50 Customers Calls)",
		features: [
			"Basic Dashboard / No Booking Calendar Integration (Only Inquri.ai's platform Calendar (FREE)",
		],
		price: "Trial",
		buttonText: "Try now",
		buttonVariant: "secondary" as const,
		featured: false,
	},
	{
		name: "Basic",
		icon: PricingBasicIcon,
		subtitle: "Personal Ai agent Number",
		features: [
			"Unlimited customer Calls",
			"Dashboard with Calendar Integration",
		],
		price: "$100",
		period: "/month",
		buttonText: "Subscribe now",
		buttonVariant: "primary" as const,
		featured: true,
		badgeText: "Standard",
	},
	{
		name: "Pro",
		icon: PricingProIcon,
		subtitle: "Personal Ai agent Number",
		features: [
			"Unlimited Customers Calls",
			"Dashboard with Calendar Integration",
		],
		price: "$300",
		period: "/month",
		buttonText: "Subscribe now",
		buttonVariant: "secondary" as const,
		featured: false,
	},
];

const Pricing = () => {
	return (
		<section className="py-20 mb-56 px-4 bg-background">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-foreground mb-4">
						Our Pricing Plan
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-16 container items-center">
					{pricingPlans.map((plan) => (
						<div key={plan.name} className="relative h-auto mt-24">
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
		</section>
	);
};

export default Pricing;
