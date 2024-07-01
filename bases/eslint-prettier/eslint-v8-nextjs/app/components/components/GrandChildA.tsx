import type { FC, ReactNode } from "react";
import { memo } from "react";

export type GrandChildAProps = { children?: ReactNode };

export const GrandChildA: FC<GrandChildAProps> = ({ children }) => (
  <div>{children}</div>
);

export const MemoizedGrandChildA = memo(GrandChildA);
