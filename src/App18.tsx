import React from "react";
import "./App.css";

type User = {
  id: number;
  email: string;
};

type Robot = {
  code: number;
  version: string;
};

type Admin = User & {
  role: number;
};

type Entity<T> = T extends User | Admin ? T : Robot;

const contentEditor: Entity<Admin> = {
  id: 123,
  email: "test@mail.com",
  role: 2,
};

// const unknownUser: Entity<{ test: 123 }> = {
//   id: 124,   // doesn't let us enter
//   email: "test2@main.com",
//   role: 2,
// };

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
