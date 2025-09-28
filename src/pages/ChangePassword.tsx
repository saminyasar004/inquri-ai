import AuthLayout from "@/components/common/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
	return (
		<AuthLayout>
			<div className="space-y-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900">
						Change Password
					</h2>
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="password" className="text-gray-700">
							Password
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input
								id="password"
								type="password"
								placeholder="Password"
								className="pl-10 h-12 bg-white border-gray-200"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="confirmPassword"
							className="text-gray-700"
						>
							Confirm Password
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input
								id="confirmPassword"
								type="password"
								placeholder="Password"
								className="pl-10 h-12 bg-white border-gray-200"
							/>
						</div>
					</div>
				</div>

				<Button className="w-full h-12 bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold">
					Submit
				</Button>

				<div className="text-center">
					<span className="text-gray-600">
						Already have an account?{" "}
					</span>
					<Link
						to="/login"
						className="text-[#00FF00] hover:underline font-medium"
					>
						Login
					</Link>
				</div>
			</div>
		</AuthLayout>
	);
}
