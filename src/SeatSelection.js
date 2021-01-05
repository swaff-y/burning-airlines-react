import React from 'react';
import axios from 'axios';
import './App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/airplanes.json';

class SeatSelection extends React.Component {

  state = {
    flight: []
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

  createTable = (data) => {
    let table = []

    //Outer loop to create parent
    let rowNum = this.state.flight[0];
    console.log(this.state.flight[0].row);



    // for (let i=0; i < rowNum; i++) {
    //   let children = []
    //   //inner loop to create children
    //   for (let j = 0; j < 5; j++) {
    //     //replace with seat data
    //     children.push(<td>{`  --Seat--  `}</td>)
    //   }
    //   //Create the parent and add the children
    //   table.push(<tr>{children}</tr>)
    // }
    // return table
  }//create table


  render(){


    return(
      <div>
        <h1>Seat Selection </h1>
          <ul>
            {
              this.state.flight.map(
                flight =>
                <li key={ flight.id}>
                  {flight.id}
                </li>)
            }
          </ul>
          <table>
            {this.createTable(this.state.flight)}
          </table>

        <hr />
      </div>
    ) //return
  } //render

} //SeatSelection

export default SeatSelection;
