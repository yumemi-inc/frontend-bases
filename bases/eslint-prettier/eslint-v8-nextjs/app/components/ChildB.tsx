import type { FC, ReactNode } from "react";
import { memo } from "react";

export type ChildBProps = { children?: ReactNode };

export const ChildB: FC<ChildBProps> = ({ children }) => <div>{children}</div>;

export const MemoizedChildB = memo(ChildB);
