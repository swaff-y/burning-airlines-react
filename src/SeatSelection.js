import React from 'react';
import axios from 'axios';
import './App.css';


<<<<<<< HEAD
const AIRPLANE_API_URL = 'http://localhost:3000/airplanes.json';
=======
const AIRPLANE_API_URL = 'http://localhost:3000/reservations.json';
>>>>>>> 755991793e6de9a245cc4f892056573df5988277

class SeatSelection extends React.Component {

  state = {
    flight: []
  }; //state


  //get the data from the Rails Flight API
  fetchSeats = () => {
    axios.get(AIRPLANE_API_URL)
    .then( res => {
      console.log('response: ', res.data);
      this.setState({flight: res.data}); //save the response into state
    })
    .catch(console.warn);
  }
  //Mount the Rails data onload of page
  componentDidMount(){
    console.log('check mounted!');
    this.fetchSeats();
  }

  updateSeatSelection = (content) => {
    //Add axios.post(AIRPLANE_API_URL, {content: content})
    //.then( (res) => {
    // ###SET STATE HERE ####
    // })
    // .catch(console.warn);
  } //updateSeatSelection

  render(){
    return(
      <div>
        <h1>Seat Selection </h1>
          <ul>
            {
              this.state.flight.map(
                flight =>
                <li key={ flight.id}>
                  {flight.id}
                </li>)
            }
          </ul>
          <table>
          {
            //for (let row=0; row < this.state.flight.row; row++){
              //console.log('current row:', row );
            //} //end for loop columns
          }
          </table>

        <hr />
      </div>
    ) //return
  } //render

} //SeatSelection

export default SeatSelection;
