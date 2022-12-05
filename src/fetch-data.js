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
    description2
    description3
    description4
    description5
    description6
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


const REGISTRATION_INPUT = `
mutation InsertUserData($whatsApp: Boolean, $codingSkills: String, $comments: String, $email: String, $phone: String, $studentAge: String, $studentGender: String, $studentName: String, $teachingLanguage: String, $teachingMethod: String, $yourName: String) {
  insert_UserData(objects: {whatsApp: $whatsApp, codingSkills: $codingSkills, comments: $comments, email: $email, phone: $phone, studentAge: $studentAge, studentGender: $studentGender, studentName: $studentName, teachingLanguage: $teachingLanguage, teachingMethod: $teachingMethod, yourName: $yourName}) {
    affected_rows
    returning {
      whatsApp
			codingSkills
			comments
			email
			phone
			studentAge
			studentGender
			studentName
			teachingLanguage
			teachingMethod
			yourName
    }
  }
}
`
export const submitRegistrationData = async (variables) => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: REGISTRATION_INPUT,
      variables
    })
  });
  return await response.json();
};