import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import Waveform from "./wave-form";

interface AudioCardProps {
	companyName: string;
	voiceType: "Male" | "Female";
	logoSrc: string;
}

const AudioCard: React.FC<AudioCardProps> = ({
	companyName,
	voiceType,
	logoSrc,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="bg-card border border-border rounded-2xl p-6 w-80 flex-shrink-0">
			<div className="flex items-center space-x-4">
				{/* Logo */}
				<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
					<img
						src={logoSrc}
						alt={`${companyName} logo`}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Company Info */}
				<div className="flex-1 min-w-0">
					<h3 className="text-card-foreground font-medium truncate">
						{companyName}
					</h3>
					<p className="text-muted-foreground text-sm">{voiceType}</p>
				</div>
			</div>

			{/* Audio Controls */}
			<div className="mt-4 flex items-center space-x-3">
				<button
					onClick={togglePlay}
					className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
				>
					{isPlaying ? (
						<Pause className="w-4 h-4 text-primary" />
					) : (
						<Play className="w-4 h-4 text-primary ml-0.5" />
					)}
				</button>

				{/* Waveform */}
				<div className="flex-1">
					<Waveform animated={isPlaying} />
				</div>
			</div>
		</div>
	);
};

export default AudioCard;
