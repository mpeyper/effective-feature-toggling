import type { ReactNode } from "react";

type Props = {
  points: ReactNode[];
  color?: string;
};

export function DotPoints({ points, color = 'text-slate-300' }: Props) {
  return (
    <ul className="list-disc">
      {points.map((point, index) => (
        <li
          key={index}
          className={`font-data font-bold italic align-middle text-5xl leading-relaxed ${color}`}
        >
          {point}
        </li>
      ))}
    </ul>
  );
}
