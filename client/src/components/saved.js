import React from "react";
import "./saved.css";

function Saved(props) {
    return (
        <div>
        {/* <div className="card"> */}
            <div className="card-body">
                <div className="row">
                    <h3 className="resulttitle">Title:</h3>
                    <p className="ptitle">{props.title}</p>
                    
                </div>
                <div className="row">
                    <h6>Authors:</h6>
                    <p className="pauthors">{props.authors}</p>
                </div>
                <div className="row">
                    <p className="pone"><img src={props.image} /></p>
                    <p className="ptwo">{props.description}</p>     
                </div>
            </div>
        </div>
    // </div>
    )
}

export default Saved;