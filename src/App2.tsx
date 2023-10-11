import React from "react";
import "./App.css";

class User {
  protected canAuth = (): boolean => true;
}

class Person extends User {
  private firstName: string;
  private lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private canVote = (): boolean => this.age >= 18;

  checkVoitingEligibility(): void {
    this.canAuth(); // if protected - can be used from super class
    if (this.canVote()) {
      console.log(`${this.getFullName()} is eligible to vote`);
    } else {
      console.log(`${this.getFullName()} is not eligible to vote`);
    }
  }
}

const person1 = new Person("John", "Doe", 25);
const person2 = new Person("Jone", "Smith", 16);

console.log(person1.getFullName());
console.log(person2.getFullName());

person1.checkVoitingEligibility();
person2.checkVoitingEligibility();

//console.log(person1.firstName); // roperty 'firstName' is private and only accessible within class 'Person'
//console.log( person1.canAuth()); // roperty 'canAuth' is protected and only accessible within class 'User' and its subclasses.

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
