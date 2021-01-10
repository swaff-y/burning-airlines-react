import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'https://burning-airlines-2021.herokuapp.com/flights/select/';

class SelectedFlight extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedFlight: ''
      };
  };

  componentDidMount(props){

    let URL = AIRPLANE_API_URL+this.props.flightId
     // console.log(URL);
    axios.get(URL)
    .then((res)=>{
    // console.log('response:', res.data);
    this.setState({selectedFlight:res.data}); //save into state
    })
    .catch(console.warn);
  } //componentDidMount

  render() {
    let flight = this.state.selectedFlight;
    return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Date:</th>
            <th>Flight No:</th>
            <th>From:</th>
            <th>To:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.date}</td>
            <td>{flight.flight_no}</td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
          </tr>
        </tbody>
      </table>

    </div>
    ); // return
  }; //render()
};

export default SelectedFlight
