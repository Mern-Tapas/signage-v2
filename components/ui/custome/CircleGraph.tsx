import React from "react";

interface CircleGraphProps {
  /** Yellow ring percentage (0–100) */
  yellow?: number;
  /** Purple ring percentage (0–100) */
  purple?: number;
  /** Green ring percentage (0–100) */
  green?: number;
  /** Center text total value */
  total?: number | string;
}

const CircleGraph: React.FC<CircleGraphProps> = ({
  yellow = 20,
  purple = 50,
  green = 75,
  total = 15000,
}) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  /** Calculates stroke offset from percentage */
  const calcOffset = (percent: number): number =>
    circumference - (circumference * percent) / 100;

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative w-48 h-48">
        <svg
          viewBox="0 0 192 192"
          className="w-full h-full transform -rotate-90"
        >
          {/* Yellow */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="#FCD34D"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={calcOffset(yellow)}
            className="transition-all duration-700 ease-out"
          />
          {/* Purple */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="#A78BFA"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={calcOffset(purple)}
            className="transition-all duration-700 ease-out"
          />
          {/* Green */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="#34D399"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={calcOffset(green)}
            className="transition-all duration-700 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-3xl font-bold text-gray-800">{total}</div>
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
