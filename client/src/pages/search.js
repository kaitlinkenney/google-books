import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {Modal, Button} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import TitleSearch from "../components/titlesearch";
import Searchbar from "../components/searchbar";
import Results from "../components/results";
import "./search.css";

function Search() {

  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //will allow the user to change the input value
  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  //will send the user's submitted input to the api
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getResults(bookSearch)
      .then(res => setBooks(res.data))
      //.then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  //will send the selected book to the api post request
  function save(books) {
    console.log(books)
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

                <div className="card">
                  <Results
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.previewLink}
                  />
                  <div className="rowone">
                    <button
                      className="savebtn srchbtns btn btn-dark ml-5"
                      value={book}
                      onClick={() => {
                        save(book)
                        handleShow();
                      }
                      }
                    >Save</button>
                    <a href={book.volumeInfo.previewLink}>
                      <button
                        className="viewbtn srchbtns btn btn-dark ml-1"
                      >View</button>
                    </a>
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Congratulations!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>This book has been saved.</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
          </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}
export default Search;
