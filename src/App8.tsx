import React from "react";
import "./App.css";

enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color);

function displayColor(color: Color): void {
  if (color === Color.Red) console.log("The selected color id red.");
  else if (color === Color.Green) console.log("The selected color id green.");
  else if (color === Color.Blue) console.log("The selected color id blue.");
  else console.log("Invalid color");
}

const selectedColor: Color = Color.Green;
displayColor(selectedColor);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
