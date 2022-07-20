import type { ReactNode } from "react";

type Props = {
  className?: string;
  color?: string;
  font?: string;
  size?: string;
  children: ReactNode;
};

export function Text({
  className,
  color = "text-slate-300",
  font = "font-data",
  size = "text-5xl",
  children,
}: Props) {
  return (
    <p
      className={`${font} font-bold italic align-middle ${size} leading-relaxed ${color} ${className}`}
    >
      {children}
    </p>
  );
}
