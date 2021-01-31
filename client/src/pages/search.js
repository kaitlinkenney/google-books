import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import TitleSearch from "../components/titlesearch";
import Searchbar from "../components/searchbar";
// import Results from "../components/results";
import "./search.css";

function Search () {
    return (
        <div>
        <TitleSearch/>
        <Searchbar />
        {/* <Results /> */}
        </div>
    )
}
export default Search;