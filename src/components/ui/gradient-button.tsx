import { Button } from "@/components/ui/button";

interface GradientButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export const GradientButton = ({
	children,
	onClick,
	className,
}: GradientButtonProps) => {
	return (
		<div className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-[#00FF00] to-[#B8B4F2] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]">
			<Button
				onClick={onClick}
				className={`bg-black text-[#ECECEC] hover:bg-black/90 rounded-full px-12 h-14 text-base font-normal ${className}`}
			>
				{children}
			</Button>
		</div>
	);
};
