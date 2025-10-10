import LogoImg from "@/assets/images/logo.svg";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
	Blocks,
	CalendarDays,
	Clock,
	Gem,
	Headset,
	PhoneCall,
	Sparkles,
	Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "./dashboard-header";

export default function DashboardLayout({ children }) {
	const location = useLocation();

	const links = [
		{
			label: "Dashboard",
			href: "/dashboard",
			icon: <Blocks size={20} className="shrink-0" />,
		},

		{
			label: "Schedule",
			href: "/dashboard/schedule",
			icon: <Clock size={20} className="shrink-0" />,
		},

		{
			label: "Bookings",
			href: "/dashboard/bookings",
			icon: <CalendarDays size={20} className="shrink-0" />,
		},

		{
			label: "Train Agent",
			href: "/dashboard/train-agent",
			icon: <Sparkles size={20} className="shrink-0" />,
		},

		{
			label: "Call Details",
			href: "/dashboard/call-details",
			icon: <PhoneCall size={20} className="shrink-0" />,
		},
		{
			label: "Pricing",
			href: "/dashboard/pricing",
			icon: <Wallet size={20} className="shrink-0" />,
		},
	];
    const [open, setOpen] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="w-full h-screen flex flex-1 rounded-md relative">
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody hideMobileTopBar className="justify-between gap-10 border border-r border-[#272525] bg-black text-dark-foreground-500 relative">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{/* {open ? <Logo /> : <LogoIcon />} */}
						<Logo />
						<div className="mt-8 flex flex-col gap-2 pt-10">
							{links.map((link, idx) => (
								<SidebarLink
									key={idx}
									link={link}
									isActive={location.pathname === link.href}
								/>
							))}
						</div>
					</div>

					<div className="absolute w-[80%] bottom-8 border border-[#272525] p-4 rounded-lg">
						<h5 className="text-[#D8E1EB] text-sm mb-2">
							Freebie Plan <br />
							(Activated)
						</h5>
						<h6 className="text-[#E44043] text-sm">
							Until: 12/12/2025
						</h6>

						<div className="flex flex-row items-center justify-start gap-3 py-4">
							<Gem size={18} color="#FAAD29" />
							<h4 className="text-[#0ED80E] text-sm cursor-pointer">
								Upgrade Plan
							</h4>
						</div>

						<div className="flex flex-row items-center justify-start gap-3">
							<Headset size={18} color="#0ED80E" />
							<h4 className="text-[#0ED80E] text-sm cursor-pointer">
								Customer Hub
							</h4>
						</div>
					</div>
				</SidebarBody>
				{/* <span
					onClick={() => setOpen(!open)}
					className={cn(
						"bg-white text-primary rounded-md w-8 h-8 flex items-center justify-center absolute cursor-pointer z-30 transition-all duration-300",
						open
							? "top-[5.5rem] left-0 translate-x-[14.5rem]"
							: "top-[5.5rem] left-0 translate-x-[2.6rem]"
					)}
				>
					<ChevronsLeftRight />
				</span> */}
			</Sidebar>
			<div className="w-full min-h-full overflow-y-auto overflow-x-hidden box-border px-4 md:px-8">
				<DashboardHeader />
				{children}
			</div>
		</div>
	);
}

export const Logo = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			<img
				src={LogoImg}
				alt="Inquri AI"
				className="max-w-[80%] h-20 transition-all duration-300"
			/>
		</Link>
	);
};
