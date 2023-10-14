import React from "react";
import "./App.css";

type Circle = {
  radius: number;
};

type Rectangle = {
  width: number;
  height: number;
};

//type Shape = Circle | Rectangle;
type Shape = Circle & Rectangle;

const object: Shape = { radius: 10, width: 5, height: 8 };
console.log(object);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
