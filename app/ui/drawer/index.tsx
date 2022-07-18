import type { ReactNode } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};

export function Drawer({ children }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <aside
      className={`flex-row w-1/3 absolute -left-1/3 bottom-0 ease-in-out transition-all duration-300 z-30 transform-gpu ${
        drawerOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      {children}
      <button
        className={`bg-[#1e1e1e] text-sky-600 text-3xl font-bold rounded-r absolute bottom-0 w-4 ease-in-out transition-all duration-300 z-30 transform-gpu ${
          drawerOpen ? "right-0" : "-right-4"
        }`}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        {drawerOpen ? "\u2039" : "\u203A"}
      </button>
    </aside>
  );
}
