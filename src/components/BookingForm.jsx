// This Booking form component will contain all the course details.
import './BookForm.css';

export default function BookingForm({ course }) {
    return (
        <>
            <h1 className="h1">Course Details</h1>
            <div className='content'>
                <h4> Course Name: {course.course_name}</h4>
                <p> Course Time: {course.time}</p>
                <p> Course Location: {course.location}</p>
                <p> Needed Device: ipad or laptop</p>
                <p> Course Fee: {course.price} € </p>
                <p> Course Language:{course.language} </p>
                <p> Note:</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTrbfXRB1CJUSnhuaf0t2ai6_GTZhZh54nyyd4pZZ6DzipwA/viewform" target="_blank" rel="noreferrer">
                    <button className='button'>Register
                    </button>
                </a>
            </div>
        </>
    );
}
