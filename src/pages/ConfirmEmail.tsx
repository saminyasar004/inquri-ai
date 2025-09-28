import AuthLayout from "@/components/common/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConfirmEmail() {
	return (
		<AuthLayout>
			<div className="space-y-8">
				<div className="text-center space-y-2">
					<h2 className="text-3xl font-bold text-gray-900">
						Confirm Email
					</h2>
					<p className="text-gray-600">
						Empowering hotels and restaurants
					</p>
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email" className="text-gray-700">
							Email
						</Label>
						<div className="relative">
							<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input
								id="email"
								type="email"
								placeholder="user@mail.com"
								className="pl-10 h-12 bg-white border-gray-200"
							/>
						</div>
					</div>
				</div>

				<Button className="w-full h-12 bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold">
					<Link to={"/activate"}>Confirm</Link>
				</Button>
			</div>
		</AuthLayout>
	);
}
