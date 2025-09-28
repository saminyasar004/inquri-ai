import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sorentoLogo from "@/assets/images/1.png";
import medicalLogo from "@/assets/images/2.png";
import mechanicalLogo from "@/assets/images/3.png";
import taxLogo from "@/assets/images/4.png";
import AudioCard from "./audio-card";

const PhoneCallDemo: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const demos = [
		{
			companyName: "Sorento Bayside",
			voiceType: "Male" as const,
			logoSrc: sorentoLogo,
		},
		{
			companyName: "East Coast Medical",
			voiceType: "Female" as const,
			logoSrc: medicalLogo,
		},
		{
			companyName: "Mighty Mechanical",
			voiceType: "Male" as const,
			logoSrc: mechanicalLogo,
		},
		{
			companyName: "Easy As Tax",
			voiceType: "Female" as const,
			logoSrc: taxLogo,
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % demos.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length);
	};

	const getVisibleCards = () => {
		const visibleCards = [];
		for (let i = 0; i < 4; i++) {
			const index = (currentIndex + i) % demos.length;
			visibleCards.push(demos[index]);
		}
		return visibleCards;
	};

	return (
		<section className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex items-center justify-between mb-16">
					<h1 className="text-5xl font-bold text-demo-text leading-tight flex-1">
						Hear Iquiri.ai handle phone calls in real time.
					</h1>

					{/* Navigation Arrows */}
					<div className="flex items-center space-x-4 ml-8">
						<button
							onClick={prevSlide}
							className="w-12 h-12 rounded-full border-2 border-nav-button text-nav-button hover:bg-nav-button hover:text-background transition-all duration-200 flex items-center justify-center"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>

						<button
							onClick={nextSlide}
							className="w-12 h-12 rounded-full border-2 border-nav-button text-nav-button hover:bg-nav-button hover:text-background transition-all duration-200 flex items-center justify-center"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Demo Cards */}
				<div className="relative">
					<div className="flex items-center justify-center space-x-6">
						{/* Audio Cards Container */}
						<div className="flex space-x-6 overflow-hidden">
							{getVisibleCards().map((demo, index) => (
								<AudioCard
									key={`${demo.companyName}-${currentIndex}-${index}`}
									companyName={demo.companyName}
									voiceType={demo.voiceType}
									logoSrc={demo.logoSrc}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PhoneCallDemo;
