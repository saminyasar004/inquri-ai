import { useState, useRef, type KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";

interface VerificationInputProps {
	length?: number;
	onComplete?: (code: string) => void;
}

export function VerificationInput({
	length = 4,
	onComplete,
}: VerificationInputProps) {
	const [values, setValues] = useState<string[]>(new Array(length).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (index: number, value: string) => {
		if (value.length > 1) return; // Prevent multiple characters

		const newValues = [...values];
		newValues[index] = value;
		setValues(newValues);

		// Move to next input if value is entered
		if (value && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}

		// Call onComplete if all fields are filled
		if (newValues.every((v) => v !== "") && onComplete) {
			onComplete(newValues.join(""));
		}
	};

	const handleKeyDown = (
		index: number,
		e: KeyboardEvent<HTMLInputElement>
	) => {
		// Move to previous input on backspace if current input is empty
		if (e.key === "Backspace" && !values[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<div className="flex justify-center gap-4">
			{values.map((value, index) => (
				<Input
					key={index}
					ref={(el) => (inputRefs.current[index] = el)}
					type="text"
					inputMode="numeric"
					maxLength={1}
					value={value}
					onChange={(e) => handleChange(index, e.target.value)}
					onKeyDown={(e) => handleKeyDown(index, e)}
					className="w-16 h-16 text-center text-2xl font-semibold bg-white border-gray-300 rounded-full"
				/>
			))}
		</div>
	);
}
