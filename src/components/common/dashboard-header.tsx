import Avatar from "@/assets/images/avatar.jpg";
import Logo from "@/assets/images/logo.svg";
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
	Bell,
	ChevronDown,
	Clock,
	LockKeyhole,
	LogOut,
	Mail,
	PhoneForwarded,
	RefreshCcw,
} from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export default function DashboardHeader() {
    return (
        <div className="w-full flex items-center justify-between py-6">
            <div className="flex flex-col gap-3">
                <img src={Logo} alt="Inquri AI" className="w-24 md:w-28" />
                <h3 className="text-base font-semibold text-[#D8E1EB]">
                    Welcome, User.
                </h3>
            </div>
            <div className="flex items-center justify-end gap-3">
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
								<Link to={"/dashboard/notifications"}>
									<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
										<Bell
											className="text-[#D8E1EB] group-hover:text-primary-500"
											size={18}
										/>
										<span className="text-[#8F9397]">
											Notifications
										</span>
									</div>
								</Link>
							</DropdownMenuItem>

							<DropdownMenuItem
								onSelect={(e) => e.preventDefault()}
							>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<Mail
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>

									<Dialog>
										<DialogTrigger asChild>
											<button className="bg-transparent p-0 text-[#8F9397]">
												Change email
											</button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[580px]">
											<DialogHeader>
												<DialogTitle className="py-4 font-arialRounded flex items-center justify-center">
													Change Email
												</DialogTitle>
											</DialogHeader>
											<div className="grid gap-4 py-3 px-3">
												<div className="grid gap-3">
													<Label
														htmlFor="oldEmail"
														className=" text-[#BEBDBD] text-sm"
													>
														Enter Old Email
													</Label>
													<div className="relative w-full flex items-center">
														<Input
															id="oldEmail"
															type="email"
															placeholder="Enter Email"
															variant="default"
															className="pl-12"
														/>

														<LockKeyhole
															className="absolute left-5 text-[#939597]"
															size={16}
														/>
													</div>
												</div>
												<div className="grid gap-3">
													<Label
														htmlFor="newEmail"
														className=" text-[#BEBDBD] text-sm"
													>
														New Email
													</Label>
													<div className="relative w-full flex items-center">
														<Input
															id="newEmail"
															type="email"
															placeholder="Enter Email"
															variant="default"
															className="pl-12"
														/>

														<LockKeyhole
															className="absolute left-5 text-[#939597]"
															size={16}
														/>
													</div>
												</div>
											</div>
											<DialogFooter className="px-3">
												<Button
													type="submit"
													className="w-full"
													variant="primary"
												>
													Confirm
												</Button>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</div>
							</DropdownMenuItem>
							<DropdownMenuItem
								onSelect={(e) => e.preventDefault()}
							>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<LockKeyhole
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>

									<Dialog>
										<DialogTrigger asChild>
											<button className="bg-transparent p-0 text-[#8F9397]">
												Change password
											</button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[580px]">
											<DialogHeader>
												<DialogTitle className="py-4 font-arialRounded flex items-center justify-center">
													Change Password
												</DialogTitle>
											</DialogHeader>
											<div className="grid gap-4 py-3 px-3">
												<div className="grid gap-3">
													<Label
														htmlFor="oldPassword"
														className=" text-[#BEBDBD] text-sm"
													>
														Old Password
													</Label>
													<div className="relative w-full flex items-center">
														<Input
															id="oldPassword"
															type="password"
															placeholder="Enter Password"
															variant="default"
															className="pl-12"
														/>

														<LockKeyhole
															className="absolute left-5 text-[#939597]"
															size={16}
														/>
													</div>
												</div>
												<div className="grid gap-3">
													<Label
														htmlFor="newPassword"
														className=" text-[#BEBDBD] text-sm"
													>
														New Password
													</Label>
													<div className="relative w-full flex items-center">
														<Input
															id="newPassword"
															type="password"
															placeholder="Enter Password"
															variant="default"
															className="pl-12"
														/>

														<LockKeyhole
															className="absolute left-5 text-[#939597]"
															size={16}
														/>
													</div>
												</div>
												<div className="grid gap-3">
													<Label
														htmlFor="confirmNewPassword"
														className=" text-[#BEBDBD] text-sm"
													>
														Confirm New Password
													</Label>
													<div className="relative w-full flex items-center">
														<Input
															id="confirmNewPassword"
															type="password"
															placeholder="Enter Password"
															variant="default"
															className="pl-12"
														/>

														<LockKeyhole
															className="absolute left-5 text-[#939597]"
															size={16}
														/>
													</div>
												</div>
											</div>
											<DialogFooter className="px-3">
												<Button
													type="submit"
													className="w-full"
													variant="primary"
												>
													Confirm
												</Button>
											</DialogFooter>
										</DialogContent>
									</Dialog>
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
							<DropdownMenuItem
								onSelect={(e) => e.preventDefault()}
							>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<Clock
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>
									<Dialog>
										<DialogTrigger asChild>
											<button className="bg-transparent p-0 text-[#8F9397]">
												Set Time Zone
											</button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[580px]">
											<DialogHeader>
												<DialogTitle className="py-4 font-arialRounded flex items-center justify-center">
													Set up your timezone
												</DialogTitle>
											</DialogHeader>
											<div className="grid gap-4 py-3 px-3">
												<div className="grid gap-3">
													<Label
														htmlFor="name-1"
														className=" text-[#BEBDBD] text-sm"
													>
														Country
													</Label>
													<Select>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Select your timezone" />
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

												<div className="grid gap-3">
													<Label
														htmlFor="name-1"
														className=" text-[#BEBDBD] text-sm"
													>
														Time Zone
													</Label>
													<Select>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Select your timezone" />
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
											<DialogFooter className="px-3">
												<Button
													type="submit"
													className="w-full"
													variant="primary"
												>
													Submit
												</Button>
											</DialogFooter>
										</DialogContent>
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
							<DropdownMenuItem
								onSelect={(e) => e.preventDefault()}
							>
								<div className="flex items-center gap-3 hover:*:text-primary-500 group *:transition-all *:duration-100">
									<LogOut
										className="text-[#D8E1EB] group-hover:text-primary-500"
										size={18}
									/>

									<Dialog>
										<DialogTrigger asChild>
											<button className="bg-transparent p-0 text-[#8F9397]">
												Logout
											</button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[580px]">
											<DialogHeader>
												<DialogTitle className="py-4 font-arialRounded flex items-center justify-center">
													Do you want to logout?
												</DialogTitle>
											</DialogHeader>

											<DialogFooter className="px-3">
												<Button
													variant="default"
													className="w-full"
												>
													Yes
												</Button>
												<DialogClose asChild>
													<Button
														className="w-full"
														variant="primary"
													>
														No
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</div>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
