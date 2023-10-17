import React, { useState, useEffect } from "react";
import "./App.css";

//const test: JSX.Element = <div>Test55</div>;

type AppProps = {
  test: JSX.Element;
  children: React.ReactElement;
  onClick: () => any;
};

const App: React.FC<AppProps> = ({ test, children, onClick }) => {
  const [count, setCount] = useState<number>(0);
  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    setCount((value) => value + 1);
  };
  const handleAuxClick: React.MouseEventHandler<HTMLElement> = (event) => {};

  useEffect(() => {
    alert(count);
  }, [count]);

  return (
    <div className="App">
      <header onAuxClick={handleAuxClick} className="App-header">
        <p onClick={onClick}>Count: {count}</p>
        <p>{test}</p>
        {children}
      </header>
    </div>
  );
};

export default App;
