import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Title from "../components/title";
import Searchbar from "../components/searchbar";
import Results from "../components/results";

function Search () {
    return (
        <div>
        <Title/>
        <Searchbar />
        <Results />
        </div>
    )
}
export default Search;