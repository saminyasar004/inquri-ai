import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
	"flex h-14 w-full rounded-lg border px-5 py-4 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
	{
		variants: {
			variant: {
				primary:
					"bg-[#020202] border-[0.01px] border-primary-500 text-black placeholder:text-slate-500 dark:bg-slate-950 dark:border-slate-800 dark:placeholder:text-slate-400 dark:file:text-slate-50",
				default:
					"bg-[#0D0D0D] border-[0.01px] border-[#555555] text-dark-foreground placeholder:text-[#939597] dark:bg-slate-950 dark:border-slate-800 dark:placeholder:text-slate-400 dark:file:text-slate-50",
				outline:
					"bg-transparent border-2 border-input text-foreground placeholder:text-muted-foreground dark:bg-transparent dark:border-input dark:text-foreground dark:placeholder:text-muted-foreground",
				ghost: "bg-transparent border-0 text-foreground placeholder:text-muted-foreground dark:bg-transparent dark:text-foreground dark:placeholder:text-muted-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: "default" | "outline" | "ghost";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, variant, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ variant }), className)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
