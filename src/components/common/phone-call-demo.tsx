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
        <section className="h-auto bg-background flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mb-10 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-demo-text leading-tight flex-1">
                        Hear <span className="text-primary-500">Inquri.ai</span> handle phone calls <br className="hidden md:block" /> in real time.
                    </h1>

                    {/* Navigation Arrows */}
                    <div className="flex items-center space-x-4 md:ml-8">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#00C853] text-[#00C853] bg-transparent hover:bg-[#00C853] hover:text-white transition-all duration-200 flex items-center justify-center"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#00C853] text-[#00C853] bg-transparent hover:bg-[#00C853] hover:text-white transition-all duration-200 flex items-center justify-center"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Demo Cards */}
                <div className="relative w-full">
                    <div className="w-full flex items-center justify-center md:justify-end">
                        {/* Audio Cards Container */}
                        <div className="w-full flex flex-col md:flex-row md:flex-nowrap gap-4 md:gap-6 overflow-visible md:overflow-hidden snap-none md:snap-none pb-2">
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
