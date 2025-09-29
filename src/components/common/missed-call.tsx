import React from "react";
import { Phone, FileText } from "lucide-react";
import AdminDashboardBanner from "@/assets/images/admin-dashboard-banner.svg";

const MissedCallSection: React.FC = () => {
	return (
		<section className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						{/* Main Heading */}
						<div className="space-y-4">
							<h2 className="text-5xl font-bold leading-tight">
								<span className="text-primary-500">
									Missed the Call?
								</span>
								<br />
								<span className="text-demo-text">
									Don't Miss the
								</span>
								<br />
								<span className="text-demo-text">
									Opportunity.
								</span>
							</h2>

							<p className="text-muted-foreground text-lg leading-relaxed max-w-md">
								A missed call can easily become a missed
								opportunity. Most prospects won't wait or leave
								a voicemail—they'll just move on to someone
								else.
							</p>
						</div>

						{/* Feature List */}
						<div className="space-y-6">
							{/* Real-Time Response */}
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-6 h-6 mt-1">
									<Phone className="w-6 h-6 text-primary-500" />
								</div>
								<div className="space-y-1">
									<h3 className="text-primary-500 font-semibold text-lg">
										Real-Time Response:
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Missing a call could mean losing a
										customer. Most people won't leave a
										voicemail—they'll find someone else
										instead.
									</p>
								</div>
							</div>

							{/* Call Summaries */}
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-6 h-6 mt-1">
									<FileText className="w-6 h-6 text-primary-500" />
								</div>
								<div className="space-y-1">
									<h3 className="text-primary-500 font-semibold text-lg">
										Call Summaries:
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Our AI automatically generates call
										summaries and sends them to you
										instantly, allowing you to review and
										follow up on important conversations.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Visual */}
					<div className="flex items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<img
								src={AdminDashboardBanner}
								className="w-full border border-border rounded-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissedCallSection;
