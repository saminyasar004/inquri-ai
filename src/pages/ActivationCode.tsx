import AuthLayout from "@/components/common/auth-layout";
import { VerificationInput } from "@/components/common/verification-input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ActivationCode() {
	return (
		<AuthLayout>
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h2 className="text-3xl font-bold text-gray-900">
						Activation Code
					</h2>
					<div className="space-y-2">
						<p className="text-lg font-medium text-gray-900">
							We have sent you an activation code.
						</p>
						<p className="text-sm text-gray-600">
							An email has been sent to you email address
							containing a<br />
							code to reset your password.
						</p>
					</div>
				</div>

				<div className="space-y-6">
					<div className="text-center">
						<p className="text-gray-700 font-medium mb-6">
							Enter verification code
						</p>
						<VerificationInput length={4} />
					</div>

					<div className="text-center">
						<span className="text-gray-600">
							If you didn't receive a code{" "}
						</span>
						<Link
							to="#"
							className="text-[#00FF00] hover:underline font-medium"
						>
							click here..
						</Link>
					</div>
				</div>

				<Button className="w-full h-12 bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold">
					<Link to={"/created"}>Confirm</Link>
				</Button>
			</div>
		</AuthLayout>
	);
}
