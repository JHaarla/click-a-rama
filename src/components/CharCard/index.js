import React from "react";
import "./CharCard.css";

const CharCard = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="img-container">
                <img className="img-thumbnail" alt={props.name} src={props.imglink} />
            </div>
        </div>
    </div>
)

export default CharCard;
