import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-300">
			{/* Main footer content */}
			<div className="container px-8 md:px-10 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Home Section */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold mb-4">
							Home
						</h3>
						<div className="space-y-2">
							<p className="text-sm text-[#696984] leading-relaxed">
								Villa No. 45, Street 12, Khalifa City,
								<br />
								Abu Dhabi, United Arab Emirates
							</p>
							<div className="flex items-center space-x-2 pt-2">
								<Mail className="w-4 h-4" />
								<a
									href="mailto:demonexusvision@inquirial.com"
									className="text-sm text-[#696984] hover:text-white transition-colors"
								>
									demonexusvision@inquirial.com
								</a>
							</div>
						</div>
					</div>

					{/* Support Section */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold mb-4">
							Support
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/contact"
									className="text-sm hover:text-white transition-colors"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="/signup"
									className="text-sm hover:text-white transition-colors"
								>
									Sign Up
								</a>
							</li>
							<li>
								<a
									href="/login"
									className="text-sm hover:text-white transition-colors"
								>
									Login
								</a>
							</li>
						</ul>
					</div>

					{/* Subscription Section */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold mb-4">
							Subscription
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/plans"
									className="text-sm hover:text-white transition-colors"
								>
									Plans
								</a>
							</li>
							<li>
								<a
									href="/blogs"
									className="text-sm hover:text-white transition-colors"
								>
									Blogs
								</a>
							</li>
							<li>
								<a
									href="/faq"
									className="text-sm hover:text-white transition-colors"
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* Connect With Us Section */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold mb-4">
							Connect With Us
						</h3>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-[#0D1A0D] hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
							>
								<Facebook className="w-5 h-5 text-white" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-[#0D1A0D] hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
							>
								<Twitter className="w-5 h-5 text-white" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-[#0D1A0D] hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
							>
								<Linkedin className="w-5 h-5 text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom section with copyright and policies */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-8 md:px-10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-gray-500">
							©2025 Inquir.AI, All Rights Reserved
						</p>
						<div className="flex space-x-6">
							<a
								href="/privacy"
								className="text-sm text-gray-500 hover:text-white transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="/cookie-policy"
								className="text-sm text-gray-500 hover:text-white transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
