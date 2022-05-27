import type { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
  visible?: boolean
}

export function Button({ onClick, children, visible = true }: Props) {
  return (
    <button onClick={onClick} className={`bg-sky-600 text-slate-300 rounded p-3 font-data text-3xl ${visible ? 'visible' : 'invisible'}`}>{children}</button>
  );
}
