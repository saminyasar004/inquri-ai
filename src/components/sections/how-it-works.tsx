import React from "react";
import {
  PhoneAnsweringAnimation,
  BookingManagerAnimation,
  CustomizeAIAnimation,
  CrmIntegrationAnimation,
} from "@/components/animations";

type Step = {
  id: StepId;
  number: string;
  title: string;
  description: string;
};

type StepId = "phone" | "booking" | "customize" | "crm";

const STEPS: Step[] = [
  {
    id: "phone",
    number: "01",
    title: "AI Phone Answering",
    description:
      "Our AI picks up instantly, greets callers and understands intent.",
  },
  {
    id: "booking",
    number: "02",
    title: "Booking Manager",
    description: "Confirm details and lock in appointments with zero friction.",
  },
  {
    id: "customize",
    number: "03",
    title: "Customize AI",
    description:
      "Tailor tone, scripts and hand-offs to match your brand.",
  },
  {
    id: "crm",
    number: "04",
    title: "CRM Integration",
    description: "Sync conversations, leads and bookings to your tools.",
  },
];

const animations: Record<StepId, React.ReactNode> = {
  phone: <PhoneAnsweringAnimation />,
  booking: <BookingManagerAnimation />,
  customize: <CustomizeAIAnimation />,
  crm: <CrmIntegrationAnimation />,
};

const HowItWorks: React.FC = () => {
  const [active, setActive] = React.useState<StepId>("phone");

  return (
    <div className="w-full py-12">
      <div className="container">
        <div className="w-full flex flex-col gap-2 items-center">
          <h3 className="font-arialRounded text-4xl">
            How It <span className="text-primary-500">Works</span>
          </h3>
          <p className="font-openSans text-sm font-normal text-white/60">
            Utilize the voice AI API and our intuitive builder.
          </p>
        </div>

        {/* Mobile: simple nav bar of titles + viewport (fills screen height) */}
        <div className="md:hidden w-[88%] mx-auto py-6 min-h-[60svh] flex flex-col">
          <div role="tablist" aria-label="How it works" className="grid grid-cols-4 gap-2 flex-shrink-0">
            {STEPS.map((step) => (
              <button
                key={step.id}
                role="tab"
                aria-selected={active === step.id}
                onClick={() => setActive(step.id)}
                className={[
                  "px-2 py-2 text-center rounded-md transition-colors",
                  "text-[11px] leading-tight whitespace-normal break-words",
                  active === step.id
                    ? "text-primary-500 border-b-2 border-primary-500 bg-white/5"
                    : "text-white/70 border-b-2 border-transparent hover:text-white/90 hover:bg-white/[0.03]",
                ].join(" ")}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="mt-4 w-full flex-1 min-h-0 rounded-2xl border border-primary-500/20 bg-[linear-gradient(to_bottom,#000,#121212)] overflow-hidden relative">
            <Viewport active={active} />
          </div>
        </div>

        {/* Desktop / Tablet: original grid with cards */}
        <div className="hidden md:grid w-[80%] mx-auto grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 py-12">
          {/* Cards */}
          {STEPS.slice(0, 2).map((step) => (
            <StepCard
              key={step.id}
              step={step}
              active={active === step.id}
              onActivate={() => setActive(step.id)}
            />
          ))}

          {/* Animation viewport */}
          <div className="order-3 md:order-none md:row-span-2 w-full rounded-2xl p-0 border border-primary-500/20 bg-[linear-gradient(to_bottom,#000,#121212)] overflow-hidden relative min-h-[220px] md:min-h-0">
            {/* Animated components stacked + crossfade */}
            <Viewport active={active} />
          </div>

          {/* Bottom row cards */}
          {STEPS.slice(2).map((step) => (
            <StepCard
              key={step.id}
              step={step}
              active={active === step.id}
              onActivate={() => setActive(step.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepCard: React.FC<{
  step: Step;
  active: boolean;
  onActivate: () => void;
}> = ({ step, active, onActivate }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={[
        "text-left rounded-2xl p-5 flex flex-col gap-3 items-start justify-start transition-all duration-300",
        "bg-[linear-gradient(to_bottom,#000000_0%,#121212_100%)]",
        active
          ? "border-2 border-primary-500 shadow-[0_0_0_1px_rgba(6,210,6,0.35)_inset,0_0_40px_rgba(6,210,6,0.12)]"
          : "border border-primary-500/30 hover:border-primary-500/50",
      ].join(" ")}
    >
      <h4 className="text-3xl font-semibold text-[#D7D9FB]">{step.number}</h4>
      <h5 className="text-2xl font-normal text-[#D7D9FB]">{step.title}</h5>
      <p className="text-[#686868] text-sm font-openSans font-normal">
        {step.description}
      </p>
    </button>
  );
};

const Viewport: React.FC<{ active: StepId }> = ({ active }) => {
  return (
    <div className="absolute inset-0">
      {(
        [
          ["phone", animations.phone],
          ["booking", animations.booking],
          ["customize", animations.customize],
          ["crm", animations.crm],
        ] as [StepId, React.ReactNode][]
      ).map(([id, node]) => (
        <div
          key={id}
          className={[
            "absolute inset-0 transition-all duration-500",
            active === id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
          ].join(" ")}
        >
          {node}
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
