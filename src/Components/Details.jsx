import React from "react";
import { useState } from 'react';
import Popup from '../components/Popup';
import '../App.css';

export default function Details ({course}) {
    const [buttonpopup, setButtonpopup] = useState(false);
    return (
        <div className="App">
            <main>
                <button className='button' onClick={() => setButtonpopup(true)}>Details
                </button>
            </main>
            <Popup course = {course} trigger={buttonpopup} setTrigger={setButtonpopup}></Popup>
        </div>
    );
}