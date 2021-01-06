import React from 'react';
import axios from 'axios';
// import '../App.css';


// const AIRPLANE_API_URL = 'http://localhost:3000/airplanes.json';
const RESERVATION_API_URL = 'http://localhost:3000/reservations/select/';
const USER_API_URL = 'http://localhost:3000/users.json';
const FLIGHTS_API_URL = 'http://localhost:3000/flights/select/';

class SeatSelection extends React.Component {

  state = {
    flight: {},
    seatAllocated: "2A",
    selectedSeat: "",
    userSeats: [],
    flightData: [],
    row: 0,
    col: 0
  }; //state


  //get the data from the Rails Flight API
  // fetchSeats = () => {
  //   axios.get(AIRPLANE_API_URL)
  //   .then( res => {
  //     // console.log('response: ', res.data);
  //     this.setState({flight: res.data}); //save the response into state
  //   })
  //   .catch(console.warn);
  // }
  //get the data from the Rails Flight API
  fetchSelectedSeats = () => {
    let url = RESERVATION_API_URL + this.props.flightId
    // console.log("the url", url);
    axios.get(url)
    .then( res => {
      // console.log('selected seats: ', res.data);
      let arr = this.state.flightData;
      let arr2 = this.state.userSeats;
      if(Array.isArray(res.data)){
        for(let i = 0; i < res.data.length; i++){
          arr2.push(res.data[i].seat_no);
        }
      }else{
        arr.push(res.data)
        arr2.push(this.state.flightData[0].seat_no)
      }
       this.setState({userSeats: arr2}); //save the response into state
    })
    .catch(console.warn);
  }

  //get the data from the Rails User API
  fetchUsers = () => {
    axios.get(USER_API_URL)
    .then( res => {
      // console.log('response: ', res.data);
      this.setState({user: res.data}); //save the response into state
    })
    .catch(console.warn);
  }
  fetchFlights = () => {
    const url = FLIGHTS_API_URL + this.props.flightId
    console.log("thisone:", url);
    axios.get(url)
    .then( res => {
      console.log('response: ', res.data.airplane.row);
      this.setState({row:res.data.airplane.row})
      this.setState({col:res.data.airplane.col})
      this.setState({flight: res.data}); //save the response into state
    })
    .catch(console.warn);
  }

  //Mount the Rails data onload of page
  componentDidMount(){
    // console.log('check mounted!');
    this.fetchFlights();
    this.fetchUsers();
    this.fetchSelectedSeats();
  }

  toggleSeatSelection = (seatNumber) => {
    let toggleInformation = `"btn btn-secondary m-1 col-1 text-center" data-bs-toggle="button" `;
    // console.log('seat Number:',seatNumber,'seatAllocated:',this.state.seatAllocated);

    if (seatNumber === this.state.seatAllocated){
      toggleInformation = `"btn btn-primary m-1 active col-1 text-center" aria-pressed="false" disabled`
    }
    this.state.userSeats.forEach(function(item) {
      if (
        seatNumber === item
      ) {
        toggleInformation = `"btn btn-danger m-1 active col-1 text-center"  aria-pressed="false" disabled`;
      } //if
    })//forEach
    return toggleInformation
  } //toggleSeatSelection

  toggleUpdateSeat = (e) => {
    // console.log('e:', e);
    // console.log(e.target.innerText);
    e.preventDefault();
    this.props.handleSeatPicked(e.target.innerText);
    this.setState({seatAllocated: e.target.innerText});
    this.toggleSeatSelection(e.target.innerText);
  } //toggleUpdateSeat



  createTable = (data) => {
    let table = []

    let length = 1;
    let colLetter = "";
    let seat = "";
    // let toggleInformation = `btn btn-primary m-1 active col-2 text-center" data-bs-toggle="button" aria-pressed="false"`;

    //Outer loop to create parent

    // rowNum = this.state.flight.airplane.row;
    // console.log("row no:", this.flight.airplane);
    // colNum = this.state.flight.airplane.column;
    // console.log(rowNum);

    for (let i=0; i < this.props.row; i++) {
      let children = []
      //inner loop to create children
      for (let j = 0; j < this.props.col; j++) {
        //things happening here:
        //column number converted to corresponding alphabet number
        //id of <td> set to seat number based off colLetter+rowNum
        colLetter = String.fromCharCode(97 + j).toUpperCase()
        seat = `${i+1}${colLetter}`
        children.push(<div key={i+j} onClick={(e) => this.toggleUpdateSeat(e)} className={this.toggleSeatSelection(seat)} id={seat}>{seat}</div>)
      }
      //Create the parent and add the children
      table.push(<div key={i*10+3} className="row flex-nowrap justify-content-center">{children}</div>)
    }
    return table

  }//create table


  render(){
    return(
      <div>
        <hr/>
        <h1>Seat Selection </h1>
          <div className="container-fluid">
            <div className="container mx-auto">
                {this.createTable(this.state.flight)}
            </div>
          </div>
          <hr/>
      </div>
    ) //return
  } //render

} //SeatSelection

export default SeatSelection;
