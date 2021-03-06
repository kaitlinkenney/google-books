import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Saved from "../components/saved";
import TitleSaved from "../components/titlesaved";
import "./savedpage.css";


function SavedPage() {

  const [savedBooks, setSavedBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  return (
    <div>
      <TitleSaved />
      {!savedBooks ? "" : (
        <div>
          {savedBooks.map(book => {
            return (
              <div>
                <div className="card">
                  <Saved
                    key={book.id}
                    mongoId={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    deleteBook={deleteBook}
                  />
                  <div className="rowtwo">
                  <button
                    className="delbtn btn btn-dark ml-5"
                    onClick={() => { deleteBook(book._id) }}>
                    Delete</button> 
                   <a href={book.link}>
                  <button
                    className="viewbtnsave btn btn-dark ml-1"
                    href={book.link}
                  >View</button>
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}
export default SavedPage;