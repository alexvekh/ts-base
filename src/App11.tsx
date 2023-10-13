import React from "react";
import "./App.css";

interface Person {
  name: string;
  age: number;
}

function isPerson(obj: any): obj is Person {
  return typeof obj === "object" && "name" in obj && "age" in obj;
}

function greet(person: any) {
  if (isPerson(person)) {
    const personValid: Person = person;

    alert(`Hello, ${personValid.name}`);
  } else {
    alert("Invalid person object.");
  }
}

greet({ name: "John", age: 29 });

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
