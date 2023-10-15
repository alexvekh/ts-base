import React from "react";
import "./App.css";

type HasLength<T, L extends number> = T extends { length: L } ? true : false;

const has3Length: HasLength<[1, 2, 3], 3> = true;
const has5Length: HasLength<string[], 5> = false;

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
