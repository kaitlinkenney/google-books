import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import Saved from "../components/saved";
import TitleSaved from "../components/titlesaved";


function SavedPage () {
    return (
        <div>
        <TitleSaved/>
        {/* <Saved /> */}
        </div>
    )
}
export default SavedPage;