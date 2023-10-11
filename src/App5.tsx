import React from "react";
import "./App.css";

class Circle {
  readonly radius: number; // can be public readonly or privat readonly

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new Circle(5);
console.log(
  `Cirle 1 radius: ${circle1.radius}, Area: ${circle1.calculateArea()}`
);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
