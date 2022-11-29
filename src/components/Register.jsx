import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

export default function Register (){
    return(
        <button className="button"><Link to="/RegisterForm">Register</Link></button>
    )
}