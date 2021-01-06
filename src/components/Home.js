import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/flights.json';
const SEARCH_API_URL = 'http://localhost:3000/flights/';


class Home extends React.Component {

      state = {
        flights:[],
        fromVal:'',
        toVal:''
      }; //state

      showFlights =() =>{
        axios.get(SEARCH_API_URL)
        .then((res)=>{
          console.log('response:', res.data);
          this.setState({flights:res.data}); //save into state
        })
        .catch(console.warn);
        }


      fetchFlights= ()=>{
      axios.get(AIRPLANE_API_URL)
      .then((res)=>{
        console.log('response:', res.data);
        this.setState({flights:res.data}); //save into state
      })
      .catch(console.warn);
      }

      componentDidMount(){
        this.fetchFlights()
      }



      render(){
      return(
        <div className="App">
              <h1>Flights</h1>
              <table className="text-center table">
                <thead>
                  <tr>
                    <th>Flight date </th>
                    <th>Flight No </th>
                    <th>Flight From </th>
                    <th>Flight To </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.searchData.map((flight,index) => <tr key={index}><td> {flight.date}{}</td><td><a href='#'>{flight.flight_no}</a></td> <td> {flight.from}</td> <td> {flight.to}</td> </tr>)}
                </tbody>
              </table>
        </div>
      ) //return
    } //render
  };//reactComponent



export default Home
