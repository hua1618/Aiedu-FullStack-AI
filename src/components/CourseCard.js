import React from "react";
import Popup from "./Popup";


export default function CourseCard() {
  
  return (
    <section className="coursecard">
    <div className="coursecardtop">
        <h1>JavaScript</h1>
        <h3><ul className="list">
          <li>Sequence</li>
          <li>Loop</li>
          <li>Conditional</li>
          <li>Event</li>
          <li>Variable</li>
        </ul>
        </h3>
      </div>
      <div className="coursecardbottom">
        <h2 className="coursename">Funding Coding</h2>
        <p>Time: 15:30 - 16:30 (EET)<br />
          Wednesdays</p>
        <h3>€176</h3>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAQguELb1AvM578SDjCz3FsSc_Q8xIMOyGT6ymOjft-xoYOg/viewform?usp=sf_link" target="_blank" rel="noreferrer">   
        <button style={{
            backgroundColor:"yellow", 
            border:0}}>Book Course
        </button>
    </a>
    <Popup/>
    
        
      </div>
    </section>
  );
};