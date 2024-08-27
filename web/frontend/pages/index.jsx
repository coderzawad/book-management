import React, { useState, useEffect } from "react";
import "./homepage.css";

export default function HomePage() {
  const [bookName, setBookname] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [page, setPage] = useState("");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  function handleButtonClick() {
    const newBook = {
      bookname: bookName,
      book_author: authorName,
      bookpage: page,
    };

    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = [...storedBooks, newBook];

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);

    setBookname("");
    setAuthorName("");
    setPage("");
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="styles.css" />
      <title>Book Management System</title>
        <h1 className="meow-title">Book Management System</h1>
      <div className="container">
        <div className="input-section">
          <label htmlFor="book-number">Book Num:</label>
          <input
            type="text"
            id="book-number"
            name="book-number"
            value={bookName}
            onChange={(e) => setBookname(e.target.value)}
          />
          <label htmlFor="author-name">Author Name:</label>
          <input
            type="text"
            id="author-name"
            name="author-name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <label htmlFor="page">Page:</label>
          <input
            type="text"
            id="page"
            name="page"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
          <button className="submit-btn" onClick={handleButtonClick}>Submit</button>
        </div>
        <div className="book-list-section">
          <h2>Book List</h2>
          <table id="books-list">
            <thead>
              <tr>
                <th>Book Num</th>
                <th>Author Name</th>
                <th>Page</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.bookname}</td>
                  <td>{book.book_author}</td>
                  <td>{book.bookpage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
