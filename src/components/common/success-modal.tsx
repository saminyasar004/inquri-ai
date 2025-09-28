import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface SuccessModalProps {
	title: string;
	message: string;
	buttonText?: string;
	buttonHref?: string;
}

export function SuccessModal({
	title,
	message,
	buttonText = "Back To login",
	buttonHref = "/login",
}: SuccessModalProps) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-6">
				<div className="flex justify-center">
					<div className="w-16 h-16 bg-[#00FF00] rounded-full flex items-center justify-center">
						<CheckCircle className="w-8 h-8 text-white" />
					</div>
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-gray-900">
						{title}
					</h3>
					<p className="text-gray-600">{message}</p>
				</div>

				<Link to={buttonHref}>
					<Button className="w-full h-12 bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold">
						← {buttonText}
					</Button>
				</Link>
			</div>
		</div>
	);
}
