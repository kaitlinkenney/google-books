import React from "react";
import "./saved.css";

function Saved(props) {
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
                       
                </div>
                <div className="row ptwo">
                <p>{props.description}</p> 
                </div>
               
            </div>
        </div>
    )
}

export default Saved;