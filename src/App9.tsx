import React from "react";
import "./App.css";

let book: [string, number, boolean];

book = ["The catcher in the Rye", 1951, true];

const title: string = book[0];
const year: number = book[1];
const isAvailable: boolean = book[2];

console.log(`Title: ${title}`);
console.log(`Year: ${year}`);
console.log(`Is Available: ${isAvailable}`);

console.log(book);

book.push("10"); // We can add to array bu it noy in cortege
console.log(book);
//delete book[2];
console.log(book);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
