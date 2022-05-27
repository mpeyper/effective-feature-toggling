import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Text({ children }: Props) {
  return <p className="font-data font-bold italic align-middle text-5xl leading-relaxed text-slate-300">{children}</p>
}
