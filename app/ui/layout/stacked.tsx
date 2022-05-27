import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Stacked({ children }: Props) {
  return (
    <div className="flex flex-col gap-10 items-center w-full">{children}</div>
  );
}
