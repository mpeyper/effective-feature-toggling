import type { ReactNode } from "react";

type Props = {
  enabled: Boolean;
  children: ReactNode;
};

export function FadedContent({ enabled, children }: Props) {
  return (
    <div
      className={`absolute w-full h-full transition-all duration-700 transform-gpu ${
        enabled ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
