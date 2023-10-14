import React from "react";
import "./App.css";

// Type

type User = {
  id: number;
  name: string;
};

type UserList = User[];

const user: User = { id: 223344, name: "John" };

const userList: UserList = [user];

// // my variant
// const userList: User[] = [];
// const user: User = { id: 223344, name: "John" };
// userList.push(user);
// console.log(userList);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello {user.name}</header>
    </div>
  );
}

export default App;
