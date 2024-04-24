import { Child } from "./components/Child";

export const App = () => {
  return (
    <div>
      {/* lint error が発生する */}
      <img src="test.gif" />
      <Child />
    </div>
  );
};
