import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface GradientInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const GradientInput = ({ className, ...props }: GradientInputProps) => {
	return (
		<div className="relative inline-block w-full p-[1px] rounded-md bg-gradient-to-r from-[#39D139] to-[#1D6B1D]">
			<Input
				className={cn("bg-black border-0 ring-0", className)}
				{...props}
			/>
		</div>
	);
};
