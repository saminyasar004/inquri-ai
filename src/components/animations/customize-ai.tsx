import React, { useEffect, useMemo, useState } from "react";

const CustomizeAIAnimation: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Ambient glow + masked grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(6,210,6,0.08)_0%,rgba(6,210,6,0)_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[100%] h-[100%] rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,#0c0c0c,#141414)] p-5 overflow-hidden">
        {/* Subtle conic halo */}
        <div className="pointer-events-none absolute -inset-16 opacity-40 [mask-image:radial-gradient(55%_55%_at_50%_50%,#000_35%,transparent_70%)]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-primary-500/10" />
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(6,210,6,0.18)_0deg,rgba(0,170,255,0.12)_120deg,rgba(140,120,255,0.10)_240deg,rgba(6,210,6,0.18)_360deg)] animate-rotate-slow" />
          </div>
        </div>
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary-500/70 shadow-[0_0_8px_rgba(6,210,6,0.6)] animate-spark"
              style={{
                left: `${10 + ((i * 13) % 80)}%`,
                top: `${20 + ((i * 17) % 60)}%`,
                animationDelay: `${i * 240}ms`,
              }}
            />
          ))}
        </div>
        <div className="text-sm text-white/70 mb-3">Agent Builder</div>

        {/* Toggles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Tone", hint: "Friendly" },
            { label: "Script", hint: "Lead capture" },
            { label: "Routing", hint: "Sales team" },
          ].map((x, i) => (
            <div
              key={x.label}
              className="relative rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(20,20,20,0.28))] p-3 overflow-hidden animate-slot"
              style={{ animationDelay: `${i * 300}ms` }}
            >
              <div className="text-[11px] uppercase tracking-wider text-white/50">{x.label}</div>
              <div className="text-xs text-[#D7D9FB]">{x.hint}</div>

              {/* Active sweep */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 animate-sweep"
                style={{ animationDelay: `${i * 600}ms` }}
              />
              {/* Edge glow */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-lg opacity-30 blur-[3px] bg-[linear-gradient(140deg,rgba(0,180,255,0.12),rgba(6,210,6,0.14),rgba(140,120,255,0.12))]" />
              {i === 0 && (
                <span className="pointer-events-none absolute -inset-1 rounded-lg animate-ring-ripple" />
              )}
            </div>
          ))}
        </div>

        {/* Live preview */}
        <div className="mt-5 relative rounded-xl border border-primary-500/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(20,20,20,0.22))] p-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_25%_20%,rgba(6,210,6,0.10)_0%,rgba(6,210,6,0)_60%)]" />
          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] animate-shine" />
          <div className="text-[11px] uppercase tracking-wider text-white/60">Live Preview</div>
          <div className="mt-2 text-xs text-[#D7D9FB]">
            <span className="text-primary-500">AI</span>: <TypingText />
          </div>

          {/* Cursor */}
          <div className="mt-3 h-1 w-1 bg-primary-500 shadow-[0_0_8px_rgba(6,210,6,0.8)] animate-caret" />
        </div>
      </div>
    </div>
  );
};

export default CustomizeAIAnimation;

function TypingText() {
  const lines = useMemo(
    () => [
      "Thanks for calling! I can book jobs and answer questions.",
      "I can collect leads and route them to your sales team.",
      "I’ll confirm details and schedule right into your calendar.",
    ],
    []
  );

  const text = useTypeLoop(lines, 26, 1200);
  return <span>{text}</span>;
}

function useTypeLoop(lines: string[], speed = 28, pause = 1000) {
  const [i, setI] = useState(0); // line index
  const [n, setN] = useState(0); // chars

  useEffect(() => {
    const current = lines[i] ?? "";
    if (n < current.length) {
      const t = setTimeout(() => setN((v) => v + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setI((v) => (v + 1) % lines.length);
      setN(0);
    }, pause);
    return () => clearTimeout(t);
  }, [i, n, lines, speed, pause]);

  return (lines[i] ?? "").slice(0, n);
}
