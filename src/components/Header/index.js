import React from "react";
import "./header.css";

const Header = props => (
    <div className="header">
        <div className="title">Click-A-Rama</div>
        <div className="mesg">{props.message}</div>
        <div className="score">Score: {props.score}  |  High Score: {props.highscore}</div>
    </div>
);

export default Header;