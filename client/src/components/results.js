import React from "react";
import "./results.css";

function Results(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <h3 className="resulttitle">Title</h3>
                        <p>{props.title}</p>
                    </div>
                    <div className="row">
                        <h6>Authors</h6>
                        <p>{props.authors}</p>
                    </div>
                    <div className="row">
                        <p className="pone"><img src={props.image} /></p>
                        <p className="ptwo">{props.description}</p>
                        <button
                            className="viewbtn"
                            href={props.link}
                        >View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;

// function Results({
//     title,
//     authors,
//     description,
//     image,
//     link
// }) {
//     return (
//         <div>
//             <div className="card">
//                 <div className="card-body">
//                     <div className="row">
//                         <h3 className="resulttitle">Title</h3>
//                         <p>{title}</p>
//                     </div>
//                     <div className="row">
//                         <h6>Authors</h6>
//                         <p>{authors}</p>
//                     </div>
//                     <div className="row">
//                         <p className="pone"><img src={image} /></p>
//                         <p className="ptwo">{description}</p>
//                         <button
//                             className="viewbtn"
//                             href={link}
//                         >View</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Results;