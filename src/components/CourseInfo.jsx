import React from "react";
import Details from "./Details";
import Register from "./Register";

export default function CourseInfo({course}) {
  return (
    <section className="coursecard">
      <div className="coursecardtop">
        <h1>{course.course_name}</h1>
        <h3>
          <ul className="list" >
            <li>{course.course_description}</li>
            
          </ul>
        </h3>
      </div>
      <div className="coursecardbottom">
        <h2 className="coursename">{course.course_code}</h2>
        <p>Time: {course.time} (EET)<br />{course.days}
          <br />{course.location} | {course.language}</p>
        <h3>{course.price} €</h3>
        <Register />
        <Details course={course} />
      </div>
    </section>
  );
};