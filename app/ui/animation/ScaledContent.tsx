import type { ReactNode } from "react";

type Props = {
  enabled: Boolean;
  children: ReactNode;
};

export function ScaledContent({ enabled, children }: Props) {
  return (
    <div
      className={`w-full ease-in-out transition-all duration-500 transform-gpu ${
        enabled ? "scale-100" : "scale-[0.25]"
      }`}
    >
      {children}
    </div>
  );
}
