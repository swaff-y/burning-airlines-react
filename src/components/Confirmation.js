import React from 'react';
import '../App.css';
import axios from 'axios';
import { Route, Link, HashRouter as Router} from 'react-router-dom';

const RESERVATION_API_URL = 'https://burning-airlines-2021.herokuapp.com/reservations/booking/';

class Confirmation extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          confirmationData: [],
          flightNumber: "",
          flightTo:"",
          flightFrom:"",
          name: "",
          flightDay: ""
        }; //state
        // this.fetchConfirmation= this.fetchConfirmation.bind(this);
      };

  componentDidMount(props){
    //===============================================================
    //this is currently pulling flight ID ..just to confirm API pull is working.
    //===============================================================
    let URL = RESERVATION_API_URL+this.props.match.params.reservationid
    // setTimeout(function() {
        console.log(URL);
      axios.get(URL)
      .then((res)=>{
      console.log('response:', res.data)
      this.setState({confirmationData:res.data})
      this.setState({flightNumber:res.data[0].flight.flight_no}) //save into state
      this.setState({flightTo:res.data[0].flight.to}) //save into state
      this.setState({flightFrom:res.data[0].flight.from}) //save into state
      this.setState({name:res.data[0].user.name}) //save into state
      this.setState({flightDay:res.data[0].flight.date}) //save into state
      })
      .catch(console.warn);
    // }, 500);

    // let URL = RESERVATION_API_URL+this.props.match.params.reservationid
    //   console.log(URL);
    // axios.get(URL)
    // .then((res)=>{
    // console.log('response:', res.data)
    // this.setState({confirmationData:res.data})
    // this.setState({flightNumber:res.data[0].flight.flight_no}) //save into state
    // this.setState({flightTo:res.data[0].flight.to}) //save into state
    // this.setState({flightFrom:res.data[0].flight.from}) //save into state
    // this.setState({name:res.data[0].user.name}) //save into state
    // this.setState({flightDay:res.data[0].flight.date}) //save into state
    // })
    // .catch(console.warn);
  } //componentDidMount

  // fetchConfirmation = () => {
  //   let URL = RESERVATION_API_URL+this.props.match.params.reservationid
  //     console.log(URL);
  //   axios.get(URL)
  //   .then((res)=>{
  //   console.log('response:', res.data)
  //   this.setState({confirmationData:res.data})
  //   this.setState({flightNumber:res.data[0].flight.flight_no}) //save into state
  //   this.setState({flightTo:res.data[0].flight.to}) //save into state
  //   this.setState({flightFrom:res.data[0].flight.from}) //save into state
  //   this.setState({name:res.data[0].user.name}) //save into state
  //   this.setState({flightDay:res.data[0].flight.date}) //save into state
  //   })
  //   .catch(console.warn);
  // } //componentDidMount

  render(){
    console.log("user: ", this.state.confirmationData);

    return (
      <div className="container">
        <h1>Thanks for booking with Burnt Airlines. Please check your emails for the confimation email that you will never recieve.</h1>
        <h4>Your confirmation code is: {this.props.match.params.reservationid}</h4>
        <br />
        <hr />
        < br />
        <h3>Your booking details: </h3>
        <br />
          <ul className="list-group">
            <li className="list-group-item">Passenger Name:
              {this.state.name}</li>
            <li className="list-group-item">Flying from <em><strong>{this.state.flightFrom}</strong></em>, to <em><strong>{this.state.flightTo}</strong></em></li>
            <li className="list-group-item">Date: {this.state.flightDay}</li>
            <li className="list-group-item">Flight number: {this.state.flightNumber}</li>
          </ul>

        <br />

      <p><Link className="btn btn-primary"to="/search">Book another flight</Link></p>



      </div>
    ); //return
  } //render
} //Confirmation class

export default Confirmation;

// <ul className="list-group">
//   <li className="list-group-item">Passenger Name:
//     {this.state.name}</li>
//   <li className="list-group-item">Flying from <em><strong>{this.state.confirmationData.flight.from}</strong></em>, to <em><strong>{this.state.confirmationData.flight.to}</strong></em></li>
//   <li className="list-group-item">Date: {this.state.confirmationData.flight.date}</li>
//   <li className="list-group-item">Flight number: {this.state.confirmationData.flight.flight_no}</li>
// </ul>
