import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import TitleSearch from "../components/titlesearch";
import Searchbar from "../components/searchbar";
import Results from "../components/results";
import "./search.css";

function Search() {

  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  // const [formObject, setFormObject] = useState({
  //   title: "",
  //   authors: "",
  //   description: "",
  //   image: "",
  //   link: ""
  // })
  const [bookSearch, setBookSearch] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.getResults(bookSearch)
      .then(res => setBooks(res.data))
      //.then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  function save(books) {
console.log(books)
  //  const savedBook = {
  //    title: books.volumeInfo.title,
  //    authors: books.volumeInfo.authors,
  //    description: books.volumeInfo.description,
  //    image: books.volumeInfo.imageLinks.thumbnail,
  //    link: books.volumeInfo.previewLink
  //   }
   //console.log(savedBook)
// setFormObject({ ...formObject, 
//   title: books.volumeInfo.title, 
//   authors: books.volumeInfo.authors, 
//   description: books.volumeInfo.description,
//    image: books.volumeInfo.imageLinks.thumbnail, 
//    link: books.volumeInfo.previewLink
//    })
     API.saveBook({
      title: books.volumeInfo.title,
      authors: books.volumeInfo.authors,
      description: books.volumeInfo.description,
      image: books.volumeInfo.imageLinks.thumbnail,
      link: books.volumeInfo.previewLink
     })
        .then(res => console.log("saved"))
        .catch(err => console.log(err))
    }

 

  return (
    <div>
      <TitleSearch />
      <form id="searchBook">
        <input className="form-control form-control-lg" type="text" placeholder="Search for a book!" onChange={handleInputChange} value={bookSearch} />
      </form>
      <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Search </button>

      {!books.items ? "" : (
          <div>
            {books.items.map(book => {
              return (
                <div>
                  <div className="row">
                    <button
                      className="savebtn"
                      value={book}
                      onClick={() => {save(book)}}
                    >Save</button>
                  </div>
                  <Results
                    key={book.id}
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
        )}
    </div>

  )
}
export default Search;









 
