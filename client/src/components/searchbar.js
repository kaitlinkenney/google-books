import React from "react";
import "./searchbar.css";

function Searchbar() {
    return (
        <div>
            <form id="searchBook">
                <input class="form-control form-control-lg" type="text"/>
        </form>
        <button type="submit" className="btn btn-dark">Search</button>
        </div>
    )
}

export default Searchbar;