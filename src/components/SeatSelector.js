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
  render() {
    return (
    <div>
      { this.props.seatSelection }
    </div>
    ); // return
  }; //render()
};
export default SeatSelector;
