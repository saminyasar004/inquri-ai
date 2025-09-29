export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-black flex flex-col">
			<main className="flex-1 py-24 px-6">
				<div className="container">
					{/* Header */}
					<div className="mb-12">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							<span className="text-[#00FF00]">Privacy</span>{" "}
							<span className="text-white">Policy</span>
						</h1>
					</div>

					{/* Content */}
					<div className="prose prose-invert max-w-none">
						<div className="text-gray-400 space-y-6">
							<div className="mb-8">
								<p className="text-sm">
									<strong>Effective Date:</strong> [Insert
									Date]
								</p>
								<p className="mt-4">
									Thank you for visiting [Your Website Name]
									("we", "our", "us"). Your privacy is
									important to us. This Privacy Policy
									explains how we collect, use, and protect
									your personal information when you visit or
									interact with our website
									[www.yourwebsite.com] (the "Site").
								</p>
							</div>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									1. Information We Collect
								</h2>
								<p className="mb-4">
									We may collect the following types of
									information:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Personal Information:</strong>{" "}
										such as your name, email address, phone
										number, etc. (only when you submit it
										voluntarily, e.g., through contact forms
										or account registration).
									</li>
									<li>
										<strong>Usage Data:</strong> including
										your IP address, browser type, device
										type, pages visited, time spent on the
										site, and other analytical data.
									</li>
									<li>
										<strong>
											Cookies and Tracking Technologies:
										</strong>{" "}
										we may use cookies to enhance your
										experience, analyze site traffic, and
										improve our services.
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									2. How We Use Your Information
								</h2>
								<p className="mb-4">
									We may use your information for the
									following purposes:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										To provide and maintain our website.
									</li>
									<li>
										To respond to your inquiries or provide
										customer support.
									</li>
									<li>
										To send you updates, newsletters, or
										marketing communications (you can opt
										out).
									</li>
									<li>
										To analyze and improve the performance
										and content of our site.
									</li>
									<li>
										To detect and prevent fraudulent or
										illegal activity.
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									3. Sharing Your Information
								</h2>
								<p className="mb-4">
									We do not sell your personal data. We may
									share your information with:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Service Providers:</strong> who
										assist in operating our site or
										servicing you.
									</li>
									<li>
										<strong>Legal Authorities:</strong> if
										required by law or to protect our legal
										rights.
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									4. Your Rights and Choices
								</h2>
								<p className="mb-4">
									You may have the right to:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Access the personal data we hold about
										you.
									</li>
									<li>
										Request correction or deletion of your
										data.
									</li>
									<li>
										Opt out of marketing communications.
									</li>
								</ul>
								<p className="mt-4">
									To exercise any of these rights, contact us
									at: [your@email.com]
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									5. Security
								</h2>
								<p>
									We take reasonable precautions to protect
									your personal information. However, no
									method of transmission over the Internet is
									100% secure.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									6. Third-Party Links
								</h2>
								<p>
									Our website may contain links to other
									websites. We are not responsible for their
									privacy practices or content.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									7. Children's Privacy
								</h2>
								<p>
									Our services are not directed to children
									under 13. We do not knowingly collect
									personal information from children.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									8. Changes to This Privacy Policy
								</h2>
								<p>
									We may update this Privacy Policy from time
									to time. Changes will be posted on this page
									with an updated "Effective Date."
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									9. Contact Us
								</h2>
								<p className="mb-2">
									If you have any questions or concerns about
									this Privacy Policy, please contact us at:
								</p>
								<p>
									[your@email.com] | [Your Address, City,
									Country]
								</p>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
