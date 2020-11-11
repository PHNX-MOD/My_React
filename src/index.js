import React from "react";
import { render } from "react-dom";

const Book = ({ title, pages, author }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{pages}</p>
      <p>{author}</p>
    </div>
  );
};

let booklist = [
  { title: "The Sun Rises From The East", pages: 365, author: "Daivd Charlie" },
  {
    title: "The Sun Rises From The West",
    pages: 560,
    author: "dam bum bum Charlie"
  }
];

class Libray extends React.Component {
  render(){
const books = this.props.books
  return (
    <div>
      {books.map((book, i) => (
        <Book key={innerWidth} title={book.title} pages={book.pages} author={book.author} />
      ))}
    </div>
  );
}
};

render(<Libray books={booklist} />, document.getElementById("root")); 
