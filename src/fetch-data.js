const ENDPOINT_URL = "https://internal-ghost-70.hasura.app/v1/graphql";
const COMMENTS_QUERY = `
query lookupCustomerOrder {
  CourseData {
    course_code
    course_description
    course_name
    language
    location
    price
    time
    days
    age
    id
    teacher_name
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
