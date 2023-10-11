import React from "react";
import "./App.css";

interface Person {
  firstName: string;
  lastName: string;
}

interface Employee {
  role: string;
  getSalary: () => number;
}

class User {}

class Manager extends User implements Employee, Person {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Manager";
    this.salary = 50000;
  }

  getSalary = (): number => {
    return this.salary;
  };
}

class Developer implements Employee, Person {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Developer";
    this.salary = 60000;
  }
  getSalary = (): number => {
    return this.salary;
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
