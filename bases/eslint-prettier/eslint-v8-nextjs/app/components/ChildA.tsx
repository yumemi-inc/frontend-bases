import type { FC, ReactNode } from "react";
import { memo } from "react";

export type ChildAProps = { children?: ReactNode };

export const ChildA: FC<ChildAProps> = ({ children }) => <div>{children}</div>;

export const MemoizedChildA = memo(ChildA);
