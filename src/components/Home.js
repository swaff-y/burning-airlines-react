import React from 'react';
import axios from 'axios';
import '../App.css';
import { Route, Link, HashRouter as Router} from 'react-router-dom';


const AIRPLANE_API_URL = 'https://burning-airlines-2021.herokuapp.com/flights.json';
const SEARCH_API_URL = 'https://burning-airlines-2021.herokuapp.com/flights/';


class Home extends React.Component {

      state = {
        flights:[],
        fromVal:'',
        toVal:'',
        user_id:''
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
        this.setState({user_id:this.props.userID})
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

                  <Router>
                    {this.props.searchData.map((flight,index) => <tr key={index}><td>{flight.date}</td><td><Link to={'/flight/'+flight.id+'/'+this.state.user_id}>{flight.flight_no}</Link></td> <td>{flight.from}</td> <td>{flight.to}</td> </tr>)}
                  </Router>

                </tbody>
              </table>
        </div>
      ) //return
    } //render
  };//reactComponent



export default Home
