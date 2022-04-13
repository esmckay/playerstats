import React from "react";
import './../App.css'

export default function Cards (props) {
    return(
        <li key={props.id}>
            <div className="card">
                <h4 onClick={() => {
                        props.setResults(props.id);
                        props.resetResults();
                    } }>
                        {props.fName + ' ' + props.lName}
                </h4>
                <p>Team: {props.team}</p>
                <p>Position: {props.position}</p>
            </div>
        </li>
    ) 
}
