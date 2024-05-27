import { ChildA, MemoizedChildA } from "./components/ChildA";
import { ChildB, MemoizedChildB } from "./components/ChildB";

export type { ChildAProps as ChildProps } from "./components/ChildA";
export {
  ChildA as Child,
  MemoizedChildA as MemoizedChild,
} from "./components/ChildA";

export const App = () => {
  return (
    <div>
      {/* lint error が発生する */}
      <img src="test.gif" />

      <ChildA>Child</ChildA>
      <MemoizedChildA>Child</MemoizedChildA>

      <ChildB>Child</ChildB>
      <MemoizedChildB>Child</MemoizedChildB>
    </div>
  );
};
