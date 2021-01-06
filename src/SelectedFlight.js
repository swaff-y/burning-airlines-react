import React from 'react';
import axios from 'axios';
import './App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/flights.json';

const SelectedFlight = (props) =>{
  return(
    <div>
      props.selectedFlight.map (flight=>
        {flight.id}
      )

    </div>

  );//return
}//SelectedFlight



export default SelectedFlight
