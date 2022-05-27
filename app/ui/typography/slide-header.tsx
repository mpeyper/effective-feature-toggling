import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SlideHeader({ children }: Props) {
  return <h2 className="absolute top-5 left-20 font-header text-7xl font-bold text-sky-600">{children}</h2>
}
