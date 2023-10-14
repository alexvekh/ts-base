import React from "react";
import "./App.css";

// Generics

type IsFunction<T> = T extends (...args: any[]) => any ? T : null;

const name = "Jhon";
const handleChange = () => alert("click");

const myFunction: IsFunction<typeof handleChange> = handleChange;

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
