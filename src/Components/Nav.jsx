import React from "react";
import{Link} from "react-router-dom";
import './Nav.css';


export default function Nav(){
    return (
        <nav className="nav">
        <img src="./images/logo.svg" alt="logo"/>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/StudentsProjects">Projects</Link></h4>
            <h4><Link to="/Login">Log in</Link></h4>
        </nav>
    )
}