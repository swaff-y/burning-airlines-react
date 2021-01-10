import React from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';

const RESERVATION_POST_URL = 'https://burning-airlines-2021.herokuapp.com/reservations';

class SeatSelector extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          seatSelection: '',
          bookingCode: '',
      };
  };

  componentDidMount(){
    const randomCode = Math.floor(Math.random()*16777215).toString(16);
     this.setState({bookingCode:randomCode});
  }

  handleClick = (ev) => {
    console.log("clicked value:", ev.target.innerHTML);
    console.log("URL:", RESERVATION_POST_URL);

    // const bookingCode = bookingCode();

    axios.post(RESERVATION_POST_URL, {
      seat_no: ev.target.value,
      booking_code: this.state.bookingCode,
      flight_id: this.props.flightId,
      user_id: this.props.userId,
    })
    .then((res)=>{
    console.log('response:', res.data);
     // this.setState({selectedFlight:res.data}); //save into state
     this.props.history.push(`/confirmation/` + this.state.bookingCode)
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
