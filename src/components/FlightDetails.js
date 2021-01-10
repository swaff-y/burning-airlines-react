import React from 'react';
import SeatSelection from './SeatSelection';
import SeatSelector from './SeatSelector';
import SelectedFlight from './SelectedFlight';
import axios from 'axios';

const FLIGHTS_API_URL = 'https://burning-airlines-2021.herokuapp.com/flights/select/';

class FlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        flightId: 68,
        flight: [],
        col: 0,
        row: 0,
        seatPicked: "",
        userId: 0
      };
  };

  handleSeatSelected = (seat) => {
    console.log("Handle seleted", seat);
  }
  handleSeatPicked = (seatPicked) =>{
    this.setState({seatPicked})
  }

  componentDidMount = () => {
    const url = FLIGHTS_API_URL + this.props.match.params.flight_id
    console.log("thisone:", url);
    axios.get(url)
    .then( res => {
      console.log('response: ', res.data.airplane.row);
      this.setState({row:res.data.airplane.row})
      this.setState({col:res.data.airplane.column})
      this.setState({flight: res.data}); //save the response into state
    })
    this.setState({flightId: this.props.match.params.flight_id})
    this.setState({userId: this.props.match.params.user_id})
  }

  render() {
    return (
      <div>
        <SelectedFlight flightId={this.props.match.params.flight_id} />
        <SeatSelection flightId={this.props.match.params.flight_id}  row={this.state.row} col={this.state.col} handleSeatPicked={this.handleSeatPicked}/>
        <SeatSelector handleSeatSelected={this.handleSeatSelected} seatPicked={this.state.seatPicked}  flightId={this.props.match.params.flight_id}   userId={this.props.match.params.user_id} history={this.props.history}/>
      </div>
    );
  }
}

export default FlightDetails;
