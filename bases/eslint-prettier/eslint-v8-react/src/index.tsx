import type { FC } from "react";

const Child = () => {
  return (
    <div>
      <img src="https://placehold.co/100x100.png" />
    </div>
  );
};

export const App: FC = () => {
  return (
    <div>
      <Child />
    </div>
  );
};
