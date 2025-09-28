import React from "react";

interface WaveformProps {
	bars?: number;
	animated?: boolean;
}

const Waveform: React.FC<WaveformProps> = ({ bars = 40, animated = false }) => {
	// Generate random heights for waveform bars
	const generateBars = () => {
		return Array.from({ length: bars }, () => Math.random() * 100 + 10);
	};

	const [barHeights, setBarHeights] = React.useState(generateBars);

	React.useEffect(() => {
		if (!animated) return;

		const interval = setInterval(() => {
			setBarHeights(generateBars());
		}, 150);

		return () => clearInterval(interval);
	}, [animated, bars]);

	return (
		<div className="flex items-center justify-center space-x-0.5 h-8">
			{barHeights.map((height, index) => (
				<div
					key={index}
					className="bg-waveform transition-all duration-150 ease-in-out"
					style={{
						width: "2px",
						height: `${Math.max(height * 0.3, 4)}px`,
					}}
				/>
			))}
		</div>
	);
};

export default Waveform;
