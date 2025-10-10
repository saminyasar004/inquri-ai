import React from "react";

const BookingManagerAnimation: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -inset-12 bg-[radial-gradient(60%_60%_at_60%_30%,rgba(6,210,6,0.10)_0%,rgba(0,170,255,0.06)_40%,rgba(6,210,6,0)_75%)]" />

      <div className="relative z-10 mx-auto w-[100%] h-[100%] rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,#0c0c0c,#141414)] px-5 py-4 overflow-hidden">
        {/* Request bubble */}
        <div className="flex items-center justify-center text-xs text-[#D7D9FB]">
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            Request: Book a job for John, plumbing
          </div>
          
        </div>

        {/* Timeline progression */}
        <div className="mt-6">
          
          <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary-500 via-emerald-400 to-cyan-400 animate-progress" style={{ animationDelay: "150ms" }} />
            <span className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 rounded-full bg-primary-500/60 border border-primary-500/70 shadow-[0_0_8px_rgba(6,210,6,0.7)]" />
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500/60 border border-primary-500/70 shadow-[0_0_8px_rgba(6,210,6,0.7)]" />
            <span className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 rounded-full bg-primary-500/60 border border-primary-500/70 shadow-[0_0_8px_rgba(6,210,6,0.7)]" />
          </div>
        </div>

        {/* Suggested time chips */}
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {[
            "Fri • 10:30 AM",
            "Fri • 1:00 PM",
            "Mon • 9:00 AM",
            "Sat • 3:00 PM",
            "Thu • 2:00 PM",
            "Wed • 4:00 PM",
            "Sun • 4:00 PM",
            "Tue • 5:00 PM",
            "Mon • 5:00 PM"

          ].map((t, i) => (
            <div
              key={t}
              className={`relative rounded-full border px-3 py-1 text-[11px] text-[#D7D9FB] ${
                i === 0
                  ? "border-primary-500/50 bg-primary-500/10 shadow-[0_0_16px_rgba(6,210,6,0.25)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {t}
              {i === 0 && (
                <span className="pointer-events-none absolute -inset-1 rounded-full animate-ring-ripple" />
              )}
            </div>
          ))}
        </div>

        {/* Booking confirmation card */}
        <div className="absolute left-1/2 bottom-16 -translate-x-1/2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-xl bg-primary-500/10 blur-xl" />
            <div className="relative rounded-xl border border-primary-500/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(20,20,20,0.25))] px-4 py-3 text-xs text-[#D7D9FB] animate-fly-up">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-primary-500/50 bg-primary-500/20 flex items-center justify-center text-[10px] text-primary-500 font-semibold">✓</div>
                <div className="font-semibold">Booking Confirmed</div>
              </div>
              <div className="mt-1 text-[11px] text-white/70">Fri • 10:30 AM • Tech: Alex</div>
            </div>

            {/* Connectors to Calendar and CRM */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-64 h-10">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[46%] h-0.5 opacity-70 animate-link-flow" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[46%] h-0.5 opacity-70 animate-link-flow" />
              <div className="absolute left-0 -bottom-0.5 text-[10px] text-white/60">CRM Sync</div>
              <div className="absolute right-0 -bottom-0.5 text-[10px] text-white/60">Calendar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingManagerAnimation;


