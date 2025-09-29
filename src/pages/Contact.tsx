import ContactBanner from "@/assets/images/contact.jpg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function Contact() {
	return (
		<div className="h-auto py-12 flex flex-col">
			<main className="flex-1">
				{/* Contact Us Section */}
				<section className="py-16 px-6">
					<div className="container">
						{/* Header */}
						<div className="text-center mb-24">
							<h1 className="text-4xl md:text-5xl font-bold text-[#00FF00] mb-4">
								Contact Us
							</h1>
							<p className="text-gray-400 text-lg">
								The benefits of using an AI receptionist for
								your business
							</p>
						</div>

						{/* Contact Form Section */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
							{/* Left Side - Image */}
							<div className="relative">
								<div className="rounded-2xl overflow-hidden">
									<img
										src={ContactBanner}
										alt="Professional in car"
										width={500}
										height={600}
										className="w-full h-auto object-cover"
									/>
								</div>
							</div>

							{/* Right Side - Form */}
							<div className="space-y-8">
								<div>
									<h2 className="text-3xl font-bold text-[#00FF00] mb-4">
										We'd love to hear from you
									</h2>
									<p className="text-gray-400">
										The benefits of using an AI receptionist
										for your business
									</p>
								</div>

								<form className="space-y-6">
									{/* Name Fields */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-3">
											<label
												htmlFor="firstName"
												className="block text-white text-base cursor-pointer font-medium mb-2"
											>
												First name{" "}
												<span className="text-red-500">
													*
												</span>
											</label>

											<Input
												id="firstName"
												placeholder="First name"
												className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00]"
											/>
										</div>
										<div className="space-y-3">
											<label
												htmlFor="lastName"
												className="block text-white text-base cursor-pointer font-medium mb-2"
											>
												Last name{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												id="lastName"
												placeholder="Last name"
												className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00]"
											/>
										</div>
									</div>

									{/* Email */}
									<div className="space-y-3">
										<label
											htmlFor="email"
											className="block text-white text-base cursor-pointer font-medium mb-2"
										>
											Email{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
											<Input
												id="email"
												type="email"
												placeholder="you@company.com"
												className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00] pl-10"
											/>
										</div>
									</div>

									{/* Phone Number */}
									<div className="space-y-3">
										<label
											htmlFor="phoneNumber"
											className="block text-white text-base cursor-pointer font-medium mb-2"
										>
											Phone number
										</label>
										<div className="flex gap-2">
											<Select>
												<SelectTrigger className="w-24 h-16 bg-gray-900 border-gray-700 text-dark-foreground-500">
													<SelectValue placeholder="BD" />
												</SelectTrigger>
												<SelectContent className="bg-gray-900 border-gray-700">
													<SelectItem
														value="bd"
														className="text-dark-foreground-500"
													>
														BD
													</SelectItem>
													<SelectItem
														value="us"
														className="text-dark-foreground-500"
													>
														US
													</SelectItem>
													<SelectItem
														value="uk"
														className="text-dark-foreground-500"
													>
														UK
													</SelectItem>
												</SelectContent>
											</Select>
											<Input
												id="phoneNumber"
												placeholder="+61"
												className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00]"
											/>
										</div>
									</div>

									{/* Message */}
									<div className="space-y-3">
										<label
											htmlFor="message"
											className="block text-white text-base cursor-pointer font-medium mb-2"
										>
											Message{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<Textarea
											id="message"
											placeholder="Leave us a message..."
											rows={4}
											className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00] resize-none"
										/>
									</div>

									{/* Privacy Policy Checkbox */}
									<div className="flex items-center space-x-2">
										<Checkbox
											id="privacy"
											className="border-gray-700 data-[state=checked]:bg-[#00FF00] data-[state=checked]:border-[#00FF00]"
										/>
										<label
											htmlFor="privacy"
											className="text-sm cursor-pointer text-gray-400 leading-relaxed"
										>
											You agree to our friendly{" "}
											<a
												href="/privacy-policy"
												className="text-[#00FF00] hover:underline"
											>
												privacy policy
											</a>
											.
										</label>
									</div>

									{/* Submit Button */}
									<Button
										type="submit"
										className="w-full bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold py-3 rounded-lg transition-colors"
									>
										Send message
									</Button>

									{/* Footer Text */}
									<p className="text-xs text-gray-500 text-center">
										This site is protected by reCAPTCHA and
										the Google Privacy Policy and Terms of
										Service apply.
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>

				{/* Analytics Section */}
				<section className="py-36 px-6 bg-[#0A0A0A]">
					<div className="container">
						<div className="bg-black rounded-2xl p-12 text-center drop-shadow-contact-box">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
								Our powerful analytics
								<br />
								provides invaluable insights.
							</h2>
							<p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
								Unlock the power of data with our cutting-edge
								analytics product. Get instant insights with our
								user friendly Analytics Dashboard, and take
								advantage of our innovative digital credit
								tokens to reward your customers and incentivize
								engagement.
							</p>
							<GradientButton
								onClick={() => console.log("Clicked!")}
							>
								Subscribe Today
							</GradientButton>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
