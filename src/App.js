
import './App.css';
import CourseCard from './components/CourseCard';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
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