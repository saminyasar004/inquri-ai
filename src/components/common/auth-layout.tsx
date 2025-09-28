import Logo from "@/assets/images/logo.svg";
import AuthImages from "@/assets/images/auth-images.svg";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex">
			{/* Left side - Black background with logo and phone mockup */}
			<div className="flex-1 bg-black flex flex-col items-center justify-center p-8 text-white">
				<div className="max-w-md w-full text-center space-y-8">
					{/* Logo */}
					<div className="space-y-4 text-c	enter">
						<img src={Logo} alt="" className="w-56 mx-auto" />
						<p className="text-gray-300 text-lg">
							Takes the calls so you can take the lead
						</p>
					</div>

					{/* Phone mockup */}
					<div className="">
						<img
							src={AuthImages}
							alt=""
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>

			{/* Right side - Light background with form content */}
			<div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
				<div className="max-w-md w-full">{children}</div>
			</div>
		</div>
	);
}
