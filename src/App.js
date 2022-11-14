import { useState } from 'react';
import './App.css';
import Popup from './Components/Popup';


function App() {
  const[buttonpopup, setButtonpopup]= useState(false);
  return (
    <div className="App">
      <main>
        <button className='book-btn' onClick={()=> setButtonpopup(true)}>Book Course
        </button>
      </main>
        <Popup trigger={buttonpopup} setTrigger={setButtonpopup}>
        </Popup>
        
    </div>
  );
}

export default App;
