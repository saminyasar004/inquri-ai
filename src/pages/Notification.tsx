import { Button } from "@/components/ui/button";
import { Trash, Trash2 } from "lucide-react";

export default function Notification() {
	return (
		<section className="w-full pb-8">
			<div className="flex justify-between gap-1 flex-1 py-1">
				<div className="flex items-start w-full flex-col gap-1">
					<h3 className="text-3xl text-primary font-semibold">
						All Notifications
					</h3>
				</div>
			</div>
			<div className="py-5">
				<div className="w-full flex items-center justify-end">
					<Button variant="link">Clear All</Button>
				</div>

				<div className="space-y-5 pt-4">
					{Array.from({ length: 5 }, (_, i) => (
						<div className="w-full border border-[#4B4B4B] rounded-md p-4 flex flex-row items-center justify-between gap-4">
							<h5>
								New Booking “MD. Sajib, 742 Evergreen Street,
								Maplewood, NY 11706, USA, 12July/08/2025 :
								9:30AM
							</h5>

							<div className="flex flex-row gap-4 items-center">
								<span className="text-sm font-normal text-[#D8E1EB]">
									Today
								</span>

								<Button
									variant="link"
									className="border px-3 border-[#4F5256]"
								>
									<Trash2 className="text-[#F37171]" />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
