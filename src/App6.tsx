import React from "react";
import "./App.css";

const product: {
  readonly name: string;
  readonly price: number;
  description: string;
  manufacturer: string;
  inStock: boolean;
} = {
  name: "Laptop",
  price: 999.99,
  description: "A highv perfomace laptop wit the lates features",
  manufacturer: "TechCo",
  inStock: true,
};

//product.name = "Desk"; // Cannot assign to 'name' because it is a read-only property.
//product.price = 99;   // Cannot assign to 'price' because it is a read-only property.
console.log(product);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
