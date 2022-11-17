import React from "react";
import Details from "./Details";
import Register from "./Register";

export default function CourseInfo() {
  return (
    <section className="coursecard">
      <div className="coursecardtop">
        <h1>JavaScript</h1>
        <h3>
          <ul className="list">
            <li>Sequence</li>
            <li>Loop</li>
            <li>Conditional</li>
            <li>Event</li>
            <li>Variable</li>
          </ul>
        </h3>
      </div>
      <div className="coursecardbottom">
        <h2 className="coursename">Fun Coding</h2>
        <p>Time: 15:30 - 16:30 (EET)<br />Weds 10/01 - 29/05 
          <br />Online | English <br />Teacher: Ms. Jin</p>
        <h3>€176</h3>
        <Register />
        <Details />
      </div>
    </section>
  );
};