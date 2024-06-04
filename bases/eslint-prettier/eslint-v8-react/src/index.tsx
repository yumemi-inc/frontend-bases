import type { FC } from "react";

const Child = () => {
  return (
    <div>
      <img src="https://placehold.it/000/10x10.png" />
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
