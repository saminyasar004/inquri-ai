import Logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="w-full h-24">
			<div className="container h-full grid grid-cols-4 gap-4">
				<div className="w-full h-full flex items-center justify-between">
					<Link to={"/"}>
						<img src={Logo} alt="Inquiri AI" className="w-40" />
					</Link>
				</div>

				<div className="col-span-2 flex items-center">
					<ul className="w-full flex items-center justify-center gap-16 text-dark-foreground-500 font-arialRounded *:cursor-pointer">
						<li>How it works</li>
						<li>Industry</li>
						<li>Resources</li>
						<li>Pricing</li>
					</ul>
				</div>

				<div className="flex items-center justify-center">
					<Button className="font-bold">Login</Button>
				</div>
			</div>
		</header>
	);
}
