import React from "react";
import "./App.css";

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected makeSound = (sound: string): void => {
    console.log(`${this.name} makes a ${sound} sound.`);
  };
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  //public method
  displayBreed(): void {
    console.log(`${this.name} is a ${this.breed} dog.`);
  }

  bark(): void {
    this.makeSound("bark");
  }
}

const dog1 = new Dog("Buddy", "Golden Retriver");
dog1.displayBreed();
dog1.bark();

//console.log(dog.name); // roperty 'firstName' is private and only accessible within class 'Person'

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
