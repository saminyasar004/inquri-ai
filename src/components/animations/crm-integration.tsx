import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";

// Since we can't import SVG files directly, I'll use an inline SVG component for the logo
const LogoImg = () => (
  <svg viewBox="0 0 200 50" className="w-20 h-auto">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#06D206" fontSize="24" fontWeight="bold">
      inquri AI
    </text>
  </svg>
);

const CrmIntegrationAnimation: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* Ambient glow + masked grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(6,210,6,0.10)_0%,rgba(6,210,6,0)_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 h-full w-full">
        {/* Container for measuring positions and drawing accurate connectors */}
        <MeasureScene />
      </div>
    </div>
  );
};

const Node = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute z-30 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-[#D7D9FB] backdrop-blur-sm shadow-[0_0_0_1px_rgba(6,210,6,0.06)_inset] ${className}`}
      >
        <div className="absolute -inset-1 rounded-xl opacity-40 blur-[3px] bg-[linear-gradient(140deg,rgba(0,180,255,0.12),rgba(6,210,6,0.14),rgba(140,120,255,0.12))] [mask-image:radial-gradient(50%_50%_at(50%_50%,#000_40%,transparent_60%)]" />
        <div className="relative">
          <div className="absolute -left-2 -top-2 w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          {children}
        </div>
      </div>
    );
  }
);

Node.displayName = 'Node';

type Point = { x: number; y: number };

// SVG-based connectors for rock-solid rendering across browsers
const SVGConnectors: React.FC<{
  container: React.RefObject<HTMLDivElement>;
  pairs: { id: string; from: React.RefObject<HTMLElement>; to: React.RefObject<HTMLElement>; delay?: number }[];
}> = ({ container, pairs }) => {
  const [paths, setPaths] = useState<{ id: string; d: string; delay: number }[]>([]);
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({ w: 0, h: 0 }); // Initialize with 0
  const [isReady, setIsReady] = useState(false);

  const recalc = useCallback(() => {
    const c = container.current;
    if (!c) {
      setIsReady(false);
      return;
    }

    const cb = c.getBoundingClientRect();
    setDimensions({ w: cb.width, h: cb.height });
    
    const rectWithin = (el: HTMLElement) => {
      const a = el.getBoundingClientRect();
      const b = c.getBoundingClientRect();
      return { x: a.left - b.left, y: a.top - b.top, w: a.width, h: a.height };
    };

    const centerPoint = (r: { x: number; y: number; w: number; h: number }) => ({
      x: r.x + r.w / 2,
      y: r.y + r.h / 2,
    });

    const edgePointToward = (
      r: { x: number; y: number; w: number; h: number },
      toward: Point,
      offset = 0
    ) => {
      const cpt = centerPoint(r);
      const vx = toward.x - cpt.x;
      const vy = toward.y - cpt.y;
      
      if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001) {
        return { x: cpt.x + 1, y: cpt.y }; // Nudge to avoid division by zero
      }
      
      const hw = r.w / 2;
      const hh = r.h / 2;
      const tx = vx === 0 ? Infinity : hw / Math.abs(vx);
      const ty = vy === 0 ? Infinity : hh / Math.abs(vy);
      const t = Math.min(tx, ty);
      const uxVyLen = Math.hypot(vx, vy) || 1;
      const ux = vx / uxVyLen;
      const uy = vy / uxVyLen;
      return { x: cpt.x + vx * t + ux * offset, y: cpt.y + vy * t + uy * offset };
    };

    const newPaths: { id: string; d: string; delay: number }[] = [];
    let allRefsReady = true;
    
    for (const p of pairs) {
      if (!p.from.current || !p.to.current) {
        allRefsReady = false;
        continue;
      }
      
      const rFrom = rectWithin(p.from.current);
      const rTo = rectWithin(p.to.current);
      const cTo = centerPoint(rTo);
      const start = edgePointToward(rFrom, cTo, 2);
      const end = edgePointToward(rTo, start, -1);
      
      newPaths.push({ 
        id: p.id, 
        d: `M ${start.x},${start.y} L ${end.x},${end.y}`, 
        delay: p.delay ?? 0 
      });
    }
    
    setPaths(newPaths);
    setIsReady(allRefsReady && newPaths.length === pairs.length); // Ensure all paths are generated
  }, [container, pairs]);

  useLayoutEffect(() => {
    let initialTimeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    const ro = new ResizeObserver(recalc);
    const elementObservers: ResizeObserver[] = [];

    const setupObservers = () => {
      const c = container.current;
      if (c) {
        ro.observe(c);
      }
      pairs.forEach(p => {
        if (p.from.current) {
          const obs = new ResizeObserver(recalc);
          obs.observe(p.from.current);
          elementObservers.push(obs);
        }
        if (p.to.current) {
          const obs = new ResizeObserver(recalc);
          obs.observe(p.to.current);
          elementObservers.push(obs);
        }
      });
      window.addEventListener('resize', recalc);
    };

    // Initial calculation with a delay to ensure refs are mounted
    initialTimeout = setTimeout(() => {
      recalc();
      setupObservers(); // Setup observers after initial calc
      interval = setInterval(recalc, 1000); // Recalculate every second
    }, 100); // Increased delay slightly to be safer

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      ro.disconnect();
      elementObservers.forEach(obs => obs.disconnect());
      window.removeEventListener('resize', recalc);
    };
  }, [container, pairs, recalc]); // Added recalc to dependencies

  // Only render SVG if ready and dimensions are valid
  if (!isReady || dimensions.w <= 0 || dimensions.h <= 0) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[25]"
      width={dimensions.w}
      height={dimensions.h}
      viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComponentTransfer in="blur" result="brightblur">
            <feFuncA type="linear" slope="2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="brightblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((p) => (
        <g key={p.id}>
          {/* Glow background line */}
          <path 
            d={p.d} 
            stroke="rgba(6,210,6,0.2)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.5"
          />
          {/* Main line */}
          <path 
            id={`path-${p.id}`} 
            d={p.d} 
            stroke="rgba(6,210,6,0.6)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none"
          />
          {/* Animated dot */}
          <circle r="4" fill="#06D206" filter="url(#glow)">
            <animateMotion 
              dur="3s" 
              begin={`${p.delay / 1000}s`} 
              repeatCount="indefinite"
              path={p.d}
            />
          </circle>
          {/* Extra glow dot for better visibility (slightly larger and more transparent) */}
          <circle r="8" fill="rgba(6,210,6,0.4)" opacity="0.4"> {/* Reduced opacity for a softer glow */}
            <animateMotion 
              dur="3s" 
              begin={`${p.delay / 1000}s`} 
              repeatCount="indefinite"
              path={p.d}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

const MeasureScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const calRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  
  const pairs = useMemo(
    () => [
      { id: "phone", from: phoneRef, to: centerRef, delay: 0 },
      { id: "email", from: emailRef, to: centerRef, delay: 400 },
      { id: "calendar", from: calRef, to: centerRef, delay: 800 },
      { id: "crm", from: crmRef, to: centerRef, delay: 1200 },
    ],
    []
  );

  return (
    <div ref={containerRef} className="relative h-full w-full min-h-[400px] ">
      {/* Corner nodes */}
      <Node ref={phoneRef} className="left-4 top-4">
        Phone
      </Node>
      <Node ref={emailRef} className="right-4 top-4">
        Email
      </Node>
      <Node ref={calRef} className="left-4 bottom-10">
        Calendar
      </Node>
      <Node ref={crmRef} className="right-4 bottom-10">
        CRM
      </Node>

      {/* Conic halo behind logo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden opacity-40">
        <div 
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background: 'conic-gradient(from 0deg, rgba(6,210,6,0.18) 0deg, rgba(0,170,255,0.12) 120deg, rgba(140,120,255,0.10) 240deg, rgba(6,210,6,0.18) 360deg)',
            animationDuration: '20s'
          }}
        />
      </div>

      {/* Center logo */}
      <div
        ref={centerRef}
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] shadow-lg"
      >
        <div className="absolute -inset-4 rounded-full bg-green-500/20 blur-2xl" />
        <LogoImg />
      </div>

      {/* SVG connectors */}
      <SVGConnectors container={containerRef} pairs={pairs} />
    </div>
  );
};

export default CrmIntegrationAnimation;
