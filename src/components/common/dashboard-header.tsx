import Avatar from "@/assets/images/avatar.jpg";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	ChevronDown,
	Clock,
	LockKeyhole,
	LogOut,
	Mail,
	PhoneForwarded,
	RefreshCcw,
} from "lucide-react";
import { Label } from "../ui/label";

export default function DashboardHeader() {
	return (
		<div className="w-full flex items-center justify-between py-6">
			<div className="flex flex-col gap-3">
				<span className="text-sm font-openSans font-medium text-[#CFD3D6]">
					25 july, 2025
				</span>
				<h3 className="text-base font-semibold text-[#D8E1EB]">
					Welcome, User.
				</h3>
			</div>
			<div className="flex items-center justify-around gap-3">
				<div className="flex flex-col gap-1">
					<h4 className="text-[#D8E1EB] text-sm font-arialRounded">
						Tea and Table Services ltd.
					</h4>
					<h4 className="text-[#CFD3D6] text-sm font-openSans">
						sajibahhamed@gmail.com
					</h4>
				</div>
				<div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
					<img
						src={Avatar}
						alt="User Avatar"
						className="w-full h-full object-cover object-center"
					/>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className="w-min border-0 p-0 outline-none">
							<ChevronDown
								className="text-[#40DF40] cursor-pointer"
								size={20}
							/>
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-60 mt-5" align="end">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<Mail
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<span className="text-[#8F9397]">
										Change Email
									</span>
								</div>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<LockKeyhole
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<span className="text-[#8F9397]">
										Change Password
									</span>
								</div>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<PhoneForwarded
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<span className="text-[#8F9397]">
										Customer Call Management
									</span>
								</div>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<Clock
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<Dialog>
										<form>
											<DialogTrigger asChild>
												<span className="text-[#8F9397]">
													Set Time Zone
												</span>
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px]">
												<DialogHeader>
													<DialogTitle>
														Set up your timezone
													</DialogTitle>
												</DialogHeader>
												<div className="grid gap-4">
													<div className="grid gap-3">
														<Label htmlFor="name-1">
															Country
														</Label>
														<Select>
															<SelectTrigger className="w-[180px]">
																<SelectValue placeholder="Select a fruit" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	{/* list some real country here */}
																	<SelectItem value="bangladesh">
																		Bangladesh
																	</SelectItem>
																	<SelectItem value="india">
																		India
																	</SelectItem>
																	<SelectItem value="usa">
																		USA
																	</SelectItem>
																	<SelectItem value="canada">
																		Canada
																	</SelectItem>
																	<SelectItem value="uk">
																		UK
																	</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
												</div>
												<DialogFooter>
													<Button type="submit">
														Submit
													</Button>
												</DialogFooter>
											</DialogContent>
										</form>
									</Dialog>
								</div>
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100 cursor-pointer">
										<RefreshCcw
											className="text-[#D8E1EB] group-hover:text-primary-500"
											size={18}
										/>
										<span className="text-[#8F9397]">
											Switch Mode
										</span>
									</div>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											Dark
										</DropdownMenuItem>
										<DropdownMenuItem>
											White
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<LogOut
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<span className="text-[#8F9397]">
										Logout
									</span>
								</div>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
