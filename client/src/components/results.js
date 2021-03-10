import React from "react";
import "./results.css";


function Results(props) {

    

    return (
        <div>

            <div className="card-body">
                <div className="row">
                    {/* <div className="col-sm"> */}
                        <h3 className="resulttitle">Title:</h3>
                        <p className="ptitle">{props.title}</p>
                    {/* </div> */}
                </div>
                <div className="row">
                    {/* <div className="col-sm"> */}
                    <h6>Authors:</h6>
                    <p className="pauthors">{props.authors}</p>
                    {/* </div> */}
                </div>
                <div className="row">
                    <p className="pone"><img src={props.image} /></p>
                    <div className="row">
                        {/* <p className="ptwo">{props.description}</p> */}
                    </div>
                    <div className="row pdescr">
                        <p>{props.description}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Results;

