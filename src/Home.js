import React from 'react';
import axios from 'axios';
import './App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/flights.json';

class Home extends React.Component {

      state = {
        flights:[]
      };

      componentDidMount(){
        axios.get(AIRPLANE_API_URL)
        .then((res)=>{
          console.log('response:', res.data);
          this.setState({flights:res.data}); //save into state
        })
        .catch(console.warn);
      }


      render(){
      return(
        <div className="App">
          <h1>Flights</h1>

            <ul>
              {
                this.state.flights.map(flight => <li key={flight.id}>  {flight.date} || {flight.flight_no} || {flight.from} || {flight.to} || {flight.airplane.serial_no} </li>)
              }
            </ul>




        </div>

      ) //return
    } //render

  };



export default Home
