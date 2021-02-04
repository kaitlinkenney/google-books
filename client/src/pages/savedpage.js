import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Saved from "../components/saved";
import TitleSaved from "../components/titlesaved";


function SavedPage () {

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
        <TitleSaved/>
        {!savedBooks ? "" : (
              <div>
                {savedBooks.map(book => {
                  return (
                    <div>
                    <div className="row">
                        <button 
                        className="delbtn"
                        onClick={() => {deleteBook(book._id)}}>
                        Delete</button>
                        </div>
                    <Saved
                  key={book.id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.thumbnail}
                  link={book.previewLink}
                    />
                    </div>
                  );
                })}
              </div>
            )}
        </div>
    )
}
export default SavedPage;