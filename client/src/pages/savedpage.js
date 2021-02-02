import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import Saved from "../components/saved";
import TitleSaved from "../components/titlesaved";


function SavedPage () {

     // Deletes a book from the database with a given id, then reloads books from the db
  //  function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  
    return (
        <div>
        <TitleSaved/>
        {/* {!books.length ? (
              <h1 className="text-center"> No books saved yet!</h1>
            ) : (
              <div>
                {books.map(book => {
                  return (
                    <div>
                    <div className="row">
                      <button className="viewbtn">View</button>
                        <button 
                        className="delbtn"
                        onClick={() => deleteBook(book._id)}>
                        Delete</button>
                        </div>
                    <Saved
                  key={book.accessInfo.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  link={book.volumeInfo.previewLink}
                    />
                    </div>
                  );
                })}
              </div>
            )} */}
        </div>
    )
}
export default SavedPage;