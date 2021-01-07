import React from 'react';
// import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';

const RESERVATION_POST_URL = 'http://localhost:3000/reservations';

class SeatSelector extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          seatSelection: '',
      };
  };

  bookingCode = () => {
    const randomCode = Math.floor(Math.random()*16777215).toString(16);
    return randomCode;
  }

  handleClick = (ev) => {
    console.log("clicked value:", ev.target.value);
    console.log("URL:", RESERVATION_POST_URL);

    // const bookingCode = bookingCode();

    axios.post(RESERVATION_POST_URL, {
      seat_no: ev.target.value,
      booking_code: this.bookingCode(),
      flight_id: this.props.flightId,
      user_id: this.props.userId,
    })
    .then((res)=>{
    console.log('response:', res.data);
    // <Link to="">
    // this.setState({selectedFlight:res.data}); //save into state
    })
    .catch(console.warn);
    // this.props.handledSeatSelected(ev.target.value);
  }

  render() {
    return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="text-align-right  col-2">
        <strong>{ this.props.seatPicked }</strong>
        </div>
        <div className="text-align-left col-2">
          <button className="btn btn-primary" value={this.props.seatPicked} onClick={this.handleClick}>Select Seat</button>
        </div>
      </div>
    </div>
    ); // return
  }; //render()
};
export default SeatSelector;
