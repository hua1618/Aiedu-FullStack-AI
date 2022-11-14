import { useState } from 'react';
import './App.css';
import Popup from './Components/Popup';
import CourseCard from './components/CourseCard';
import RegisterForm from './components/RegisterForm';

function App() {
  const [buttonpopup, setButtonpopup] = useState(false);
  return (

    <div className="App">
      <main>
        <button className='book-btn' onClick={() => setButtonpopup(true)}>Book Course
        </button>
      </main>
      <Popup trigger={buttonpopup} setTrigger={setButtonpopup}>
      </Popup>



      <section>
        <div className='headline'>
          <h1>Courses</h1>
        </div>
        <div className="section">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div>
          <RegisterForm />
        </div>
      </section>
    </div>

  );
}

export default App;