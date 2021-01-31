import React from "react";
import "./saved.css";

function Saved() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <h3 className="resulttitle">Title</h3>
                        <button className="viewbtn">View</button>
                        <button className="savebtn">Delete</button>
                    </div>
                    <div className="row">
                        <h6>Author</h6>
                    </div>
                    <div className="row">
                        <p className="pone">img</p>
                        <p className="ptwo">Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved;