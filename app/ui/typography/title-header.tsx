import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function TitleHeader({ children }: Props) {
  return <h1 className="absolute m-auto pb-60 text-center font-header text-9xl font-bold text-sky-600">{children}</h1>
}
