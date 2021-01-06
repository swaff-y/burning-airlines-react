import React from 'react';
import '../App.css';
import SeatSelection from './SeatSelection';
import Home from './Home';
import UserButton from './UserButton';
import SearchForm from './SearchForm';
import SeatSelector from './SeatSelector';
import SelectedFlight from './SelectedFlight';


class Confirmation extends React.Component {


  render(){
    return (
      <div className="container">
        <h1>Thanks for booking with Burnt Airlines</h1>


      </div>
    ); //return
  } //render
} //Confirmation class

export default Confirmation;
