import React from 'react';
// import {Route, Link, HashRouter as Router} from 'react-router-dom';
// import axios from 'axios';


class SeatSelector extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          seatSelection: '',
      };
  };

  handleClick = (ev) => {
    console.log("clicked value:", ev.target.value);
    this.props.handledSeatSelected(ev.target.value);
  }

  render() {
    return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="text-align-right  col-2">
        <strong>{ this.props.seatPicked }</strong>
        </div>
        <div className="text-align-left col-2">
          <button className="btn btn-primary" value={this.props.seatSelection} onClick={this.handleClick}>Select Seat</button>
        </div>
      </div>
    </div>
    ); // return
  }; //render()
};
export default SeatSelector;
