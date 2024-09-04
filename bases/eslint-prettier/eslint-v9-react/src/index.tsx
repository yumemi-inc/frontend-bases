import type { FC } from "react";
import { useEffect, useState } from "react";

const Child = () => {
  useState(null);

  useEffect(() => {}, []);

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
