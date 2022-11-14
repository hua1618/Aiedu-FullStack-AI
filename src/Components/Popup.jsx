import React from "react";
import BookingForm from "./BookingForm";
import './Popup.css'

export default function Popup(props) {
    return (props.trigger)? (
        <div className="popup">
            <div className="popup-inner">
                <BookingForm/>
                <button className="close-btn" onClick={()=> props.setTrigger(false) }>Close</button>
                {props.childer}
            </div>
        </div>
    ): "";
}