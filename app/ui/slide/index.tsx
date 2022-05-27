import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Slide({ children }: Props) {
  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center snap-center snap-always"
    >
      {children}
    </section>
  );
}
