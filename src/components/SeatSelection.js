import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/airplanes.json';
const USER_API_URL = 'http://localhost:3000/users.json';

class SeatSelection extends React.Component {

  state = {
    flight: [],
    seatAllocated: "2A",
    userSeats: ["2C","5B","5D"]
  }; //state


  //get the data from the Rails Flight API
  fetchSeats = () => {
    axios.get(AIRPLANE_API_URL)
    .then( res => {
      console.log('response: ', res.data);
      this.setState({flight: res.data}); //save the response into state
    })
    .catch(console.warn);
  }

  //get the data from the Rails User API
  fetchUsers = () => {
    axios.get(USER_API_URL)
    .then( res => {
      console.log('response: ', res.data);
      this.setState({user: res.data}); //save the response into state
    })
    .catch(console.warn);
  }

  //Mount the Rails data onload of page
  componentDidMount(){
    console.log('check mounted!');
    this.fetchSeats();
    this.fetchUsers();
  }

  updateSeatSelection = (content) => {
    //Add axios.post(AIRPLANE_API_URL, {content: content})
    //.then( (res) => {
    // ###SET STATE HERE ####
    // })
    // .catch(console.warn);
  } //updateSeatSelection

  handleChange = (ev) => {

  }

  toggleSeatSelection = (seatNumber) => {
    let toggleInformation = `btn btn-secondary m-1 col-2 text-center" data-bs-toggle="button" `;
    // console.log('seat Number:',seatNumber,'seatAllocated:',this.state.seatAllocated);

    if (
      seatNumber === this.state.seatAllocated){
        toggleInformation = `btn btn-primary m-1 active col-2 text-center" aria-pressed="false" disabled`
    }
    this.state.userSeats.forEach(function(item) {
      if (
        seatNumber === item
      ) {
        toggleInformation = `btn btn-danger m-1 active col-2 text-center"  aria-pressed="false" disabled`;
      } //if
    })//forEach
    return toggleInformation
  } //toggleSeatSelection

  toggleUpdateSeat = (e) => {
    console.log('e:', e);
    console.log(e.target.innerText);
    e.preventDefault();
    this.setState({seatAllocated: e.target.innerText});
    this.toggleSeatSelection(e.target.innerText);
  } //toggleUpdateSeat



  createTable = (data) => {
    let table = []

    let length = 1
    let rowNum = []
    let colNum = []
    let colLetter = ""
    let seat = ""
    // let toggleInformation = `btn btn-primary m-1 active col-2 text-center" data-bs-toggle="button" aria-pressed="false"`;

    //Outer loop to create parent
    if (this.state.flight.length > 0) {
      rowNum = this.state.flight[0].row;
      colNum = this.state.flight[0].column;
      console.log(rowNum);
    }

    for (let i=0; i < rowNum; i++) {
      let children = []
      //inner loop to create children
      for (let j = 0; j < colNum; j++) {
        //things happening here:
        //column number converted to corresponding alphabet number
        //id of <td> set to seat number based off colLetter+rowNum
        colLetter = String.fromCharCode(97 + j).toUpperCase()
        seat = `${i+1}${colLetter}`
        children.push(<td onClick={(e) => this.toggleUpdateSeat(e)} className={this.toggleSeatSelection(seat)}  id={`${seat}`}>{seat}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table

  }//create table


  render(){
    return(
      <div>
        <h1>Seat Selection </h1>

          <table className="container">
            {this.createTable(this.state.flight)}
          </table>

        <hr />
      </div>
    ) //return
  } //render

} //SeatSelection

export default SeatSelection;
