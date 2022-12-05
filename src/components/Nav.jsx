import React from "react";
import{Link} from "react-router-dom";
import './Nav.css';

const style = {
    textDecoration: "none",
    color: "#03989E"
}
export default function Nav(){
    return (
        <nav className="nav">
        <img src="./images/logo.svg" alt="logo"/>
        <div className="links">
            <h4><Link to="/" style={style}>Home</Link></h4>
            <h4><Link to="/StudentsProjects" style={style}>Projects</Link></h4>
            <h4><Link to="/Login" style={style}>Log in</Link></h4>
        </div>
        </nav>
    )
}