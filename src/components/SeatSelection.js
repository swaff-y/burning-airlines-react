import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/airplanes.json';

class SeatSelection extends React.Component {

  state = {
    flight: [],
    seatAllocated: "1A"
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

  //Mount the Rails data onload of page
  componentDidMount(){
    console.log('check mounted!');
    this.fetchSeats();
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


  createTable = (data) => {
    let table = []

    let length = 1
    let rowNum = []
    let colNum = []
    let colLetter = ""

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

        colLetter = String.fromCharCode(97 + j).toUpperCase()
        children.push(<td className="btn btn-danger m-1 active col-2 text-center" data-bs-toggle="button" aria-pressed="true">{`${i+1}${colLetter.toUpperCase()}`}</td>)
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
