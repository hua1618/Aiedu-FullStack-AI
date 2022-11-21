import React from "react";
import CourseInfo from "./CourseInfo";
import Nav from "./Nav";
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Nav />
      <section>
        <div className='headline'>
          <h1>Courses</h1>
        </div>
        <div className="section">
          <CourseInfo />
          <CourseInfo />
          <CourseInfo />
        </div>
      </section>
    </div>
  );
}
export default Home;