"use client";

type MarqueeTextProps = {
  text: string;
  speed?: number; // animation speed in seconds
};

export default function MarqueeText({ text, speed = 20 }: MarqueeTextProps) {
  return (
    <div className="relative w-full overflow-hidden bg-gray-950 py-6">
      <div
        className="flex whitespace-nowrap animate-marquee w-full"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="mx-8 text-6xl font-bold text-white">{text}</span>
        <span className="mx-8 text-6xl font-bold text-white">{text}</span>
      </div>
    </div>
  );
}
