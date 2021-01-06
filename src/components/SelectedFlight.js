import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/flights/select/';

class SelectedFlight extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedFlight: ''

      };
  };

  componentDidMount(props){

    let URL = AIRPLANE_API_URL+this.props.selectedFlight
     // console.log(URL);
    axios.get(URL)
    .then((res)=>{
    console.log('response:', res.data);
    this.setState({selectedFlight:res.data}); //save into state
    })
    .catch(console.warn);
  } //componentDidMount

  render() {
    let flight = this.state.selectedFlight
    return (
    <div className="App">
      <h2> Flight {flight.flight_no} </h2>
      <p>
        Date:{flight.date } flight no.: {flight.flight_no} From: {flight.from} -&gt; To: {flight.to}
      </p>

    </div>
    ); // return
  }; //render()
};



export default SelectedFlight
