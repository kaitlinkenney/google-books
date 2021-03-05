import React from "react";
import "./results.css";


function Results(props) {
 
    return (
        <div>
            {/* <div className="card"> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                        <h3 className="resulttitle">Title:</h3>
                        <p className="ptitle">{props.title}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <h5>Authors:</h5>
                        <p className="pauthors">{props.authors}</p>
                        </div>
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

export default Results;

