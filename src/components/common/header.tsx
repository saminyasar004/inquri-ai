import Logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X, ChevronDown, ArrowUpCircle, BookOpenText, HelpCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-black sticky top-0 z-50">
            <div className="container h-20 flex items-center justify-between">
                {/* Left group: logo + nav together */}
                <div className="flex items-center gap-10">
                    <Link to={"/"}>
                        <img src={Logo} alt="Inquiri AI" className="w-32 md:w-36" />
                    </Link>

                    {/* Desktop Navigation - left of header, next to logo */}
                    <nav className="hidden lg:flex items-center">
                        <ul className="flex items-center gap-8 text-[#CFCFE6] text-sm">
                            <li className="cursor-pointer hover:text-white transition-colors">How it works</li>
                            <li className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                                <span>Industry</span>
                                <ChevronRight size={14} />
                            </li>
                            <li className="relative">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                                            <span>Resources</span>
                                            <ChevronDown size={14} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" sideOffset={10} className="min-w-[180px]">
                                        <DropdownMenuItem asChild>
                                            <a href="/#features" className="flex items-center gap-2">
                                                <ArrowUpCircle size={16} />
                                                <span>Features</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <a href="/blog" className="flex items-center gap-2">
                                                <BookOpenText size={16} />
                                                <span>Blogs</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <a href="/#faq" className="flex items-center gap-2">
                                                <HelpCircle size={16} />
                                                <span>FAQ</span>
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li className="cursor-pointer hover:text-white transition-colors">
                                <Link to={"/pricing"}>Pricing</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop Login */}
                <div className="hidden lg:flex items-center">
                    <Link
                        to={"/login"}
                        className="text-primary-500 font-semibold px-3 py-1 rounded-md hover:bg-[#00C853] hover:text-white transition-colors duration-150"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-[#00C853] p-2"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-black border-t border-gray-800">
					<nav className="container py-6">
						<ul className="flex flex-col gap-4 text-[#CFCFE6]">
							<li className="cursor-pointer hover:text-white transition-colors py-2">How it works</li>
							<li className="cursor-pointer hover:text-white transition-colors py-2 flex items-center gap-1">
								<span>Industry</span>
								<ChevronRight size={14} />
							</li>
							<li className="cursor-pointer hover:text-white transition-colors py-2 flex items-center gap-1">
								<span>Resources</span>
								<ChevronRight size={14} />
							</li>
							<li className="cursor-pointer hover:text-white transition-colors py-2">
								<Link to={"/pricing"}>Pricing</Link>
							</li>
                            <li className="pt-4 border-t border-gray-800">
                                <Link
                                    to={"/login"}
                                    className="text-primary-500 font-semibold px-3 py-1 rounded-md hover:bg-primary-500 hover:text-white transition-colors duration-150"
                                >
                                    Login
                                </Link>
                            </li>
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
}
