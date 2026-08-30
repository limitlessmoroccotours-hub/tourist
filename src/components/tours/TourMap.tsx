"use client";

import dynamic from "next/dynamic";

type MapStop = {
  name: string;
  position: [number, number];
};

type TourMapProps = {
  stops: MapStop[];
};

const TourMapClient = dynamic(
  () => import("./TourMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] w-full items-center justify-center bg-[hsl(var(--surface-soft))]">
        <p className="text-sm text-[hsl(var(--text-muted))]">
          Loading map...
        </p>
      </div>
    ),
  }
);

export default function TourMap({ stops }: TourMapProps) {
  if (stops.length === 0) {
    return null;
  }

  return (
    <div
      className="
        relative
        z-0
        isolate
        overflow-hidden
        rounded-3xl
        border
        border-[hsl(var(--border))]
        bg-[hsl(var(--card))]
      "
    >
      <TourMapClient stops={stops} />
    </div>
  );
}