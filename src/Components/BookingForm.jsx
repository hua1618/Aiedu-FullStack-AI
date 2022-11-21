// This Booking form component will contain all the course details.
import './BookForm.css';
export default function BookingForm() {
    return (
        <>
            <h1 className="h1">Course Details</h1>
            <div className='content'>
                <h3> Course Name: xxxxx</h3>

                <p> Course Time:xxx</p>
                <p> Course Location: Online/Onsite</p>
                <p> Needed Device: ipad or laptop</p>
                <p> Course Fee:xxx</p>
            </div>

            <div>
                <h3> Course Language</h3>
                <h3> Price: xxxx</h3>
                <h3> Course Calender</h3>
                <h3> Course Time:</h3>
                <h3> Note:</h3>
                <h3> Needed Devices: Laptop or Ipad</h3>
                <h3> Course Fee: xxxx</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAQguELb1AvM578SDjCz3FsSc_Q8xIMOyGT6ymOjft-xoYOg/viewform?usp=sf_link" target="_blank" rel="noreferrer">
                <button className='button'>Register
                </button>
            </a>

        </>
    );
}
