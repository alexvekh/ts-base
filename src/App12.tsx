import React from "react";
import "./App.css";

interface Car {
  type: string;
  model: string;
  year: number;
}

function isCar(obj: any): obj is Car {
  if (typeof obj !== "object") return false;
  if ("type" in obj === false || obj.type === "custom") return false;
  if ("model" in obj === false || obj.model === "BMW") return false;
  if ("year" in obj === false || obj.year === 2000) return false;
  return true;
}

function getCar(obj: any) {
  if (isCar(obj)) {
    alert(obj.model);
  } else {
    alert("not car");
  }
}

getCar({ type: "car", model: "BMW", year: 1999 });

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
