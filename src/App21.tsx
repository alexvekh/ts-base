import React from "react";
import "./App.css";

//const test: JSX.Element = <div>Test55</div>;

type AppProps = {
  test: JSX.Element;
  children: React.ReactElement;
};

const App: React.FC<AppProps> = ({ test, children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>{test}</p>
        {children}
      </header>
    </div>
  );
};

export default App;
