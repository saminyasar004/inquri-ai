import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";

type ChartDatum = {
  name: string;
  value: number;
  color: string; // base color used for legend and gradients
};

const DashboardCallPieChart = () => {
    // Palette tuned to match target design
    const data: ChartDatum[] = [
        { name: "Transferred", value: 143.03, color: "#2F2CF7" },
        { name: "Info provided", value: 67.49, color: "#EF4444" },
        { name: "Missed", value: 90.72, color: "#06B6D4" },
        { name: "Spam", value: 124.2, color: "#9A5A07" },
        { name: "Others", value: 135.76, color: "#2563EB" },
    ];

    const totalCalls = data.reduce((sum, item) => sum + item.value, 0);

    // Responsive: detect small screens
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia("(max-width: 640px)");
        const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile((e as MediaQueryList).matches ?? (e as MediaQueryListEvent).matches);
        // initial
        setIsMobile(mql.matches);
        // subscribe
        if (mql.addEventListener) mql.addEventListener("change", onChange as any);
        else mql.addListener(onChange as any);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", onChange as any);
            else mql.removeListener(onChange as any);
        };
    }, []);

    // Radii scale with screen size
    const outerR = isMobile ? 88 : 120;
    const innerR = isMobile ? 53 : 72;

    // Helpers to create subtle light/dark gradient for each slice
    const hexToRgb = (hex: string) => {
        const nhex = hex.replace('#','');
        const bigint = parseInt(nhex.length === 3 ? nhex.split('').map(c=>c+c).join('') : nhex,16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return {r,g,b};
    };

    const darken = (hex: string, amount = 0.35) => {
        const {r,g,b} = hexToRgb(hex);
        const dr = Math.max(0, Math.round(r * (1-amount)));
        const dg = Math.max(0, Math.round(g * (1-amount)));
        const db = Math.max(0, Math.round(b * (1-amount)));
        return `rgb(${dr}, ${dg}, ${db})`;
    };

    const lighten = (hex: string, amount = 0.35) => {
        const {r,g,b} = hexToRgb(hex);
        const lr = Math.min(255, Math.round(r + (255-r)*amount));
        const lg = Math.min(255, Math.round(g + (255-g)*amount));
        const lb = Math.min(255, Math.round(b + (255-b)*amount));
        return `rgb(${lr}, ${lg}, ${lb})`;
    };

    const renderCustomizedLabel = (props: any) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, value, index } = props;
        const RAD = Math.PI / 180;

        // Offsets as proportions of radius so they scale on mobile
        const r1 = outerRadius + outerRadius * 0.085; // ~+10 when outer=120
        const sx = cx + r1 * Math.cos(-midAngle * RAD);
        const sy = cy + r1 * Math.sin(-midAngle * RAD);

        // elbow point length
        const r2 = outerRadius + outerRadius * (isMobile ? 0.26 : 0.375);
        const mx = cx + r2 * Math.cos(-midAngle * RAD);
        const my = cy + r2 * Math.sin(-midAngle * RAD);

        // horizontal end
        const isRight = mx > cx;
        const ex = mx + (isRight ? outerRadius * (isMobile ? 0.26 : 0.375) : -outerRadius * (isMobile ? 0.26 : 0.375));
        const ey = my;

        const anchor = isRight ? "start" : "end";

        const name = data[index].name;
        const formatted = Number(value).toFixed(2);
        const lineColor = data[index].color; // use corresponding section color

        const nameFont = Math.max(9, Math.round(outerRadius * (isMobile ? 0.085 : 0.1)));
        const valueFont = Math.max(10, Math.round(outerRadius * (isMobile ? 0.10 : 0.116)));

        return (
            <g>
                {/* connector with elbow (bracket style) */}
                <path d={`M ${sx} ${sy} L ${mx} ${my} L ${ex} ${ey}`} stroke={lineColor} fill="none" strokeWidth={1} />
                {/* top label */}
                <text x={ex + (isRight ? 9 : -9)} y={ey - 12} fill="#A3A3A3" textAnchor={anchor} dominantBaseline="central" fontSize={nameFont}>
                    {name}
                </text>
                {/* value */}
                <text x={ex + (isRight ? 9 : -9)} y={ey + 15} fill="#E6E6E6" textAnchor={anchor} dominantBaseline="central" fontSize={valueFont} fontWeight={600}>
                    {formatted}
                </text>
            </g>
        );
    };

    // Center label using recharts Label for exact cx/cy alignment
    const renderCenterLabel = (props: any) => {
        const { viewBox } = props;
        if (!viewBox || typeof viewBox.cx !== "number" || typeof viewBox.cy !== "number") return null;
        const { cx, cy } = viewBox;
        const numberFont = Math.max(22, Math.round(outerR * (isMobile ? 0.30 : 0.33)));
        const subFont = Math.max(9, Math.round(outerR * (isMobile ? 0.09 : 0.1)));
        const numDy = -Math.round(outerR * (isMobile ? 0.09 : 0.083));
        const subDy = Math.round(outerR * (isMobile ? 0.20 : 0.167));
        return (
            <g>
                <text x={cx} y={cy + numDy} textAnchor="middle" dominantBaseline="central" fill="#D1D5DB" fontWeight={600} fontSize={numberFont}>
                    {totalCalls.toFixed(1)}
                </text>
                <text x={cx} y={cy + subDy} textAnchor="middle" dominantBaseline="central" fill="#9CA3AF" fontSize={subFont}>
                    All listed calls
                </text>
            </g>
        );
    };

    const CustomLegend = (props: any) => {
        const { items, isMobile } = props as { items: { label: string; color: string }[]; isMobile?: boolean };
        return (
            <div className={isMobile ? "flex flex-wrap items-center justify-center gap-x-4 gap-y-1" : "flex flex-col gap-2"}>
                {items.map((entry, index) => (
                    <div key={index} className={isMobile ? "flex items-center gap-2 whitespace-nowrap" : "flex items-center gap-2"}>
                        <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className={isMobile ? "text-muted-foreground text-[11px]" : "text-muted-foreground text-sm"}>
                            {entry.label}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <Card className="col-span-3 bg-black border-[#343232]">
            <CardContent className="pb-0">
                <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-4 sm:gap-10">
                    {/* Chart area */}
                    <div className="relative h-[240px] sm:h-[340px] w-full sm:w-[55%] md:w-[50%]">
                        {/* soft radial vignette behind the chart to match design */}
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)",
                                mask: "radial-gradient(circle at center, black 60%, transparent 61%)",
                            }}
                        />
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                {/* Gradients per slice */}
                                <defs>
                                    {data.map((d, i) => (
                                        <linearGradient id={`grad-${i}`} key={`grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor={darken(d.color, 0.45)} />
                                            <stop offset="55%" stopColor={d.color} />
                                            <stop offset="100%" stopColor={lighten(d.color, 0.35)} />
                                        </linearGradient>
                                    ))}
                                </defs>

                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    startAngle={90}
                                    endAngle={-270}
                                    paddingAngle={0}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={outerR}
                                    innerRadius={innerR}
                                    dataKey="value"
                                    strokeWidth={0}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={`url(#grad-${index})`} />
                                    ))}
                                    {/* Center label inside the pie */}
                                    {/* @ts-ignore - recharts types */}
                                    <Label content={renderCenterLabel} position="center" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Legend area with gap */}
                    <div className="w-full sm:w-auto sm:ml-4 md:ml-8">
                        <CustomLegend
                            items={data.map((d) => ({ label: d.name, color: d.color }))}
                            isMobile={isMobile}
                        />
                    </div>
                </div>
                    {/* Center totals moved inside <Pie> via <Label /> for correct centering */}
            </CardContent>
        </Card>
    );
};

export default DashboardCallPieChart;
