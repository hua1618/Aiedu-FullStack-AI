import React from "react";
import { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        yourName: "",
        email: "",
        phone: "",
        studentName: "",
        studentAge: "",
        comments: "",
        whatsApp: false,
        teachingLanguage: "",
        teachingMethod: "",
        studentGender: "",
        codingSkills: ""
    });


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1 className='headline'>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="yourName"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.yourName}
                />
                <br />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <br />

                <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.phone}
                />

                <input
                    type="checkbox"
                    name="whatsApp"
                    id="whatsApp"
                    onChange={handleChange}
                    checked={formData.whatsApp}
                />
                <label htmlFor="whatsApp">I agree to join the parent's whatsApp group</label>
                <br />
                <br />
                <input
                    type="text"
                    name="studentName"
                    placeholder="Student's Name"
                    onChange={handleChange}
                    value={formData.studentName}
                />
                <br />

                <input
                    type="number"
                    name="studentAge"
                    placeholder="Student's Age"
                    onChange={handleChange}
                    value={formData.studentAge}
                />
                <br />
                <label>Student's Gender</label><br />

                <select
                    id="studentGender"
                    name="studentGender"
                    onChange={handleChange}
                    value={formData.studentGender}
                >
                    <option value="">--Choose--</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                    <option value="not to tell">Not to tell</option>
                </select>
                <br />
                <br />

                <fieldset>
                    <legend>Teaching Language</legend>
                    <input
                        type="radio"
                        id="english"
                        name="teachingLanguage"
                        value="english"
                        checked={formData.teachingLanguage === "english"}
                        onChange={handleChange}

                    />
                    <label htmlFor="english">English</label>
                    <input
                        type="radio"
                        id="finnish"
                        name="teachingLanguage"
                        value="finnish"
                        checked={formData.teachingLanguage === "finnish"}
                        onChange={handleChange}
                    />
                    <label htmlFor="finnish">Finnish</label>
                </fieldset>
                <br />

                <fieldset>
                    <legend>Teaching Method</legend>
                    <input
                        type="radio"
                        id="online"
                        name="teachingMethod"
                        value="online"
                        checked={formData.teachingMethod === "online"}
                        onChange={handleChange}
                    />
                    <label htmlFor="online">Online</label>
                    <input
                        type="radio"
                        id="onsite"
                        name="teachingMethod"
                        value="onsite"
                        checked={formData.teachingMethod === "onsite"}
                        onChange={handleChange}
                    />
                    <label htmlFor="onsite">Onsite</label>
                </fieldset>
                <br />

                <label>Student's Coding Experience</label><br />
                <select
                    id="codingSkills"
                    name="codingSkills"
                    value={formData.codingSkills}
                    onChange={handleChange}
                >
                    <option value="">--Choose--</option>
                    <option value="not-at-all">Not at all</option>
                    <option value="a-little">A Little</option>
                    <option value="good">Good</option>
                </select>
                <br />
                <br />

                <textarea
                    placeholder="Comments (i.e. allergy or else"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                /><br />
                <button>Register</button>
            </form>
        </div >
    )
};