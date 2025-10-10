import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type Item = { src: string; alt: string };

type Props = {
  items: Item[];
  height?: number; // logo height in px
  speedMs?: number; // duration for one loop
  pauseOnHover?: boolean;
  // Direction of scroll. "left" matches previous behavior.
  direction?: "left" | "right";
  // Optional explicit mobile height override. Falls back to 75% of height.
  mobileHeight?: number;
};

const BrandCarousel: React.FC<Props> = ({
  items,
  height = 48,
  speedMs = 18000,
  pauseOnHover = true,
  direction = "left",
  mobileHeight,
}) => {
  const isMobile = useIsMobile();
  const finalHeight = isMobile ? (mobileHeight ?? Math.round(height * 0.75)) : height;
  const trackStyle: React.CSSProperties = {
    animationDuration: `${speedMs}ms`,
    // Reverse the animation to scroll rightwards when requested
    animationDirection: direction === "right" ? ("reverse" as const) : ("normal" as const),
  };

  const wrapperHover = pauseOnHover ? "[&:hover_.carousel-track]:pause" : "";

  // Duplicate items to create a seamless loop
  const loopItems = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden ${wrapperHover}`}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="carousel-track flex items-center gap-6 md:gap-10 will-change-transform animate-logo-scroll" style={trackStyle}>
        {loopItems.map((item, i) => (
          <div key={i} className="shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: finalHeight }}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
