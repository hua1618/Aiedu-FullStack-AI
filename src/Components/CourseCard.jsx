import React from "react";
import Details from "./Details";
import Register from "./Register";

export default function CourseCard(){
/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      "undefined",
      {
        method: "POST",
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query GetAiedusCourseCards @cached {
      Aiedus_Course_Cards {
        Course_Name
        Course_Description
        Course_Code
        Time
        Location
        Language
        Days
        Age
      }
    }
  `;
  
  function fetchGetAiedusCourseCards() {
    return fetchGraphQL(
      operationsDoc,
      "GetAiedusCourseCards",
      {}
    );
  }
  
  async function startFetchGetAiedusCourseCards() {
    const { errors, data } = await fetchGetAiedusCourseCards();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchGetAiedusCourseCards();


    return(
        <section className="coursecard">
        <div className="coursecardtop">
          <h1>{Course_Name}</h1>
          <h3>{Course_Description}</h3>
        </div>
        <div className="coursecardbottom">
          <h2 className="coursename">{Course_Code}</h2>
          <p>Age: {Age}<br />Time: {Time}<br />{Days} 
            <br />{Location} | {Name} <br />Teacher: {Ms. Jin}</p>
          <h3>{Price}</h3>
          <Register />
          <Details />
        </div>
      </section>
    );
}