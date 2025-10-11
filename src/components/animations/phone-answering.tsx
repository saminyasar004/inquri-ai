import React from "react";

const PhoneAnsweringAnimation: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Ambient glow + radar sweep with multi-hue */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(6,210,6,0.12)_0%,rgba(0,170,255,0.06)_35%,rgba(6,210,6,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0))]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full border border-primary-500/10" />
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(6,210,6,0.18)_0deg,rgba(0,170,255,0.15)_120deg,rgba(140,120,255,0.12)_240deg,rgba(6,210,6,0.18)_360deg)] animate-rotate-slow" />
        </div>
      </div>

      {/* Pulsing signal rings */}
      <div className="absolute w-72 h-72 rounded-full border border-primary-500/20 animate-pulse-glow" />
      <div className="absolute w-96 h-96 rounded-full border border-primary-500/10 animate-pulse-glow [animation-delay:400ms]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-500/70 shadow-[0_0_8px_rgba(6,210,6,0.6)] animate-spark"
            style={{
              left: `${20 + ((i * 11) % 60)}%`,
              top: `${25 + ((i * 17) % 60)}%`,
              animationDelay: `${i * 260}ms`,
            }}
          />
        ))}
      </div>

      {/* Phone body with subtle gradient edge */}
      <div className="relative z-10 w-44 h-[20rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(to_bottom,#0b0b0b_0%,#121212_100%)] shadow-[0_0_0_1px_rgba(6,210,6,0.08)_inset,0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="pointer-events-none absolute -inset-[1px] rounded-[2rem] bg-[linear-gradient(140deg,rgba(0,180,255,0.15),rgba(6,210,6,0.10),rgba(140,120,255,0.12))] opacity-30 blur-[3px]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-3 w-20 h-1.5 rounded-full bg-white/10" />

        {/* Voice waveform bars */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 flex items-end gap-1 animate-hue">
          {[6, 14, 10, 18, 8, 12, 9].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-sm bg-gradient-to-b from-primary-500 via-cyan-400/70 to-white/20 animate-wave"
              style={{ animationDelay: `${i * 110}ms`, height: `${h * 2}px` }}
            />
          ))}
        </div>

        {/* Incoming call header with shine + glass gradient */}
        <div className="absolute top-28 left-4 right-4 rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(20,20,20,0.3)_100%)] px-3 py-2 overflow-hidden backdrop-blur-[1px]">
          <div className="text-[10px] uppercase tracking-wider text-white/50">Incoming</div>
          <div className="text-sm text-[#D7D9FB]">New Lead</div>
          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] animate-shine" />
        </div>

        {/* Conversation bubbles + typing (kept inside viewport) */}
        <div className="absolute inset-x-4 top-40 bottom-6 flex flex-col justify-end gap-2 overflow-hidden">
          <Bubble side="left" text="Hi! How can I help?" delay={0} accent="cool" />
          <TypingBubble delay={550} />
          <Bubble side="right" text="I'd like to book a job." delay={1000} accent="warm" />
          <Bubble side="left" text="Sure — what day suits you?" delay={1700} accent="cool" />
        </div>
      </div>
    </div>
  );
};

function Bubble({
  side,
  text,
  delay = 0,
  accent = "cool",
}: {
  side: "left" | "right";
  text: string;
  delay?: number;
  accent?: "cool" | "warm";
}) {
  const align = side === "left" ? "items-start" : "items-end";
  const bubbleSide =
    side === "left"
      ? "bg-white/5 border-white/10"
      : "bg-primary-500/10 border-primary-500/30";
  const glow =
    accent === "warm"
      ? "linear-gradient(90deg, rgba(6,210,6,0.45), rgba(0,180,120,0.35))"
      : "linear-gradient(90deg, rgba(0,170,255,0.35), rgba(140,120,255,0.25))";
  return (
    <div className={`w-full flex ${align}`}>
      <div className="relative">
        <div
          className={`relative max-w-[75%] text-xs text-[#D7D9FB] px-3 py-2 rounded-lg border ${bubbleSide} animate-bubble`}
          style={{ animationDelay: `${delay}ms` }}
        >
          {text}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] rounded-lg opacity-30 blur-[3px]"
          style={{ background: glow }}
        />
      </div>
    </div>
  );
}

function TypingBubble({ delay = 0 }: { delay?: number }) {
  return (
    <div className={`w-full flex items-end`}>
      <div
        className="max-w-[55%] text-xs px-3 py-2 rounded-lg border bg-white/5 border-white/10 text-[#D7D9FB]/70 overflow-hidden animate-bubble animate-vanish"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/60 animate-typing"
              style={{ animationDelay: `${i * 140}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhoneAnsweringAnimation;

