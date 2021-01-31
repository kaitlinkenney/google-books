import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import TitleSearch from "../components/titlesearch";
import Searchbar from "../components/searchbar";
// import Results from "../components/results";
import "./search.css";

function Search() {

    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

  // Loads all books and sets them to books
    function loadBooks() {
        API.getResults()
          .then(res => 
            console.log(res.data)
            // setBooks(res.data)
          )
          .catch(err => console.log(err));
      };

    return (
        <div>
            <TitleSearch />
            <Searchbar />
            {/* <Results /> */}
        </div>
    )
}
export default Search;