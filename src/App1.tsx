import React from "react";
import "./App.css";

class Book {
  title: string;
  author: string;
  ratings: number[];

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.ratings = [];
  }

  addRating = (rating: number): void => {
    if (rating >= 1 && rating < 5) {
      this.ratings.push(rating);
      console.log(`Rating ${rating} addet for ${this.title}`);
    } else {
      console.log(`Invalid rating. Please provide a rating beetwen 1 and 5.`);
    }
  };
  getAveragerating(): number {
    if (this.ratings.length === 0) {
      return 0;
    }
    const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratings.length;
  }

  displayInfo(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
const book2 = new Book("To kill a Mockingbird", "Harper Lee");

book1.addRating(4);
book1.addRating(5);
book2.addRating(3);

console.log(`Average rating for ${book1.title}: ${book1.getAveragerating()}`);
console.log(`Average rating for ${book2.title}: ${book2.getAveragerating()}`);

function App() {
  let numbers: Array<number> = [1, 2, 3, 4, 5];
  let names: Array<string> = ["John", "Jane", "Mary"];
  let mixed: Array<string | number> = [1, "Hello", 2, "World"];
  let nested: Array<Array<number>> = [[1, 2], [3, 4, 5], [8]];

  let numbers2: number[] = [1, 2, 3, 4, 5];
  let names2: string[] = ["John", "Jane", "Mary"];
  let mixed2: (string | number)[] = [1, "Hello", 2, "World"];
  let nested2: number[][] = [[1, 2], [3, 4, 5], [8]];

  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
