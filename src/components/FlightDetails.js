import React from 'react';
import SeatSelection from './SeatSelection';
import SeatSelector from './SeatSelector';


class FlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        flightId: 68
      };
  };

  render() {
    return (
      <div>
        <SeatSelection flightId={this.state.flightId}  />
        <SeatSelector handleSeatSelected={this.props.handleSeatSelected} />
      </div>
    );
  }
}

export default FlightDetails;
