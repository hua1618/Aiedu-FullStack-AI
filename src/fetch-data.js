const ENDPOINT_URL = "https://internal-ghost-70.hasura.app/v1/graphql";
const COMMENTS_QUERY = `
query GetCourseData {
  CourseData {
    price
    course_code
    course_description
    course_name
    language
    location
    time
    teacher_name
    days
    age
  }
}



  
`;
export const fetchCourseData = async () => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: COMMENTS_QUERY
    })
  });
  return await response.json();
};
