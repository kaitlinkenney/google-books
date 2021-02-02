import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
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
    console.log(event.target)
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
    const { value } = event.target;
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target)
    API.getResults(bookSearch)
      // .then(res => setBooks(res.data))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  // redirect = (url) => {
  //   const preview = window.location.replace(url);
  //   return preview;
  //  }


  return (
    <div>
      <TitleSearch />
      <form id="searchBook">
        <input className="form-control form-control-lg" type="text" placeholder="Search for a book!" onChange={handleInputChange} value={bookSearch} />
        </form>
      <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Search </button>
 
      {!books.length ? (
        <h1 className="text-center"></h1>
      ) : (
          <div>
            {books.map(book => {
              return (
                <div>
                  <div className="row">
                    <button
                      className="viewbtn"
                    >View</button>
                    <button
                      className="savebtn"
                    // onClick={saveBook}
                    >Save</button>
                  </div>
                  <Results
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
        )}
    </div>

  )
}
export default Search;