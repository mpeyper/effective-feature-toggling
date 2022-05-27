import type { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  columns?: number;
  leftSpan?: number;
  rightSpan?: number;
};

export function SideBySide({
  left,
  right,
  columns = 2,
  leftSpan = columns / 2,
  rightSpan = columns - leftSpan,
}: Props) {
  return (
    <div
      className={`grid ${resolveGridCols(
        columns
      )} gap-5 w-full justify-items-center items-center px-20`}
    >
      <div className={`${resolveColSpan(leftSpan)} w-full flex justify-center items-center`}>{left}</div>
      <div className={`${resolveColSpan(rightSpan)} w-full flex justify-center items-center`}>{right}</div>
    </div>
  );
}

function resolveGridCols(columns: number) {
  switch (columns) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    case 7:
      return "grid-cols-7";
    case 8:
      return "grid-cols-8";
    case 9:
      return "grid-cols-9";
    case 10:
      return "grid-cols-10";
    case 11:
      return "grid-cols-11";
    case 12:
      return "grid-cols-12";
  }
}

function resolveColSpan(span: number) {
  switch (span) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    case 4:
      return "col-span-4";
    case 5:
      return "col-span-5";
    case 6:
      return "col-span-6";
    case 7:
      return "col-span-7";
    case 8:
      return "col-span-8";
    case 9:
      return "col-span-9";
    case 10:
      return "col-span-10";
    case 11:
      return "col-span-11";
    case 12:
      return "col-span-12";
  }
}
