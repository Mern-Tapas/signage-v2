import React from "react";

type Segment = {
    label: string;
    value: number; // raw value
    color: string;
};

interface StackedCircleGraphProps {
    segments: Segment[]; // segments to show
    total?: number; // optional total override; if absent sum(segments.value) used
    size?: number; // px of SVG box (default 192)
    strokeWidth?: number; // ring thickness
    centerLabel?: React.ReactNode;
}

const StackedCircleGraph: React.FC<StackedCircleGraphProps> = ({
    segments,
    total,
    size = 192,
    strokeWidth = 20,
    centerLabel,
}) => {
    const radius = (size - strokeWidth) / 2; // radius so stroke fits inside viewBox
    const circumference = 2 * Math.PI * radius;

    const sumValues = segments.reduce((s, seg) => s + seg.value, 0);
    const realTotal = total ?? (sumValues || 1); // avoid division by zero

    // prepare segments with percent & length
    type S = Segment & { percent: number; length: number };
    const prepared: S[] = segments.map((seg) => {
        const percent = (seg.value / realTotal) * 100;
        const length = (circumference * percent) / 100;
        return { ...seg, percent, length };
    });

    // cumulative offset in length units; we will convert to strokeDashoffset formula below
    let cumulative = 0;

    return (
        <div className="w-full flex flex-col gap-4 items-center justify-center ">
            <div className="relative " style={{ width: size, height: size }}>
                <svg
                    viewBox={`0 0 ${size} ${size}`}
                    className="w-full  h-full transform -rotate-90"
                >
                    {/* Optional: draw a faint background ring */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#eee"
                        strokeWidth={strokeWidth}
                    />

                    {/* Draw each segment */}
                    {prepared.map((seg, idx) => {
                        // strokeDasharray: draw only 'seg.length', then the rest
                        const strokeDasharray = `${seg.length} ${Math.max(
                            0,
                            circumference - seg.length
                        )}`;

                        // strokeDashoffset moves the start point. We want next segment to start where cumulative length ended:
                        // offset = circumference - cumulative
                        const strokeDashoffset = Math.max(0, circumference - cumulative);

                        // after using current cumulative, increase for next segment
                        cumulative += seg.length;

                        return (
                            <circle
                                key={seg.label + idx}
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                fill="none"
                                stroke={seg.color}
                                strokeWidth={strokeWidth}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-700 ease-out"
                            />
                        );
                    })}
                </svg>

                {/* Center label */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ pointerEvents: "none" }}
                >
                    {centerLabel ?? (
                        <>
                            <div className="text-sm text-gray-500">Total</div>
                            <div className="text-3xl font-bold text-gray-800">
                                {realTotal}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Legend */}
            <div className="flex gap-8">
                {segments.map((s) => (
                    <div key={s.label} className="flex items-center gap-2 ">
                        <span
                            style={{
                                width: 12,
                                height: 12,
                                background: s.color,
                                borderRadius: 9999,
                                display: "inline-block",
                            }}
                        />
                        <span className="text-sm text-gray-700 flex gap-2 ">
                            <span> {s.label}</span>
                            {/* <span className="font-medium">
                                {((s.value / realTotal) * 100).toFixed(1)}%
                            </span> */}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StackedCircleGraph;
