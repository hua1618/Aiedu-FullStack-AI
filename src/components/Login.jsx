import React, { useState } from "react";
import Nav from "./Nav";
import './Login.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: ""
    }

    )
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
        console.log(formData)
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }
        if (formData.joinedNewsletter){
            console.log("Thank you for signing up our newsletter!")
        }
    }

    return (
        <div>
            <Nav />
            <h2>Login</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form--input"
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    /><br/>
                    <input
                        type="password"
                        className="form--input"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    /><br/>
                    <input
                        type="password"
                        className="form--input"
                        placeholder="Confirm password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={formData.passwordConfirm}
                    /><br/>
                    <div className="form--marketing">
                        <input
                            id="okToEmail"
                            type="checkbox"
                            name="joinedNewsletter"
                            onChange={handleChange}
                            checked={formData.joinedNewsletter}
                        />
                        <label htmlFor="okToEmail">I agree to receive marketing Newsletters</label>
                    </div><br/>
                    <button className="button">Sign up</button>
                </form>
            </div>
        </div>
    );
}