import React from 'react';
import '../App.css';
import SeatSelection from './SeatSelection';
import Home from './Home';
import UserButton from './UserButton';
import SearchForm from './SearchForm';
import SeatSelector from './SeatSelector';
import SelectedFlight from './SelectedFlight';


class Search extends React.Component {

  state = {
    selectedUser: '',
    selectedFlight: '',
    from: '',
    to: ''

  };

  
  render(){
    return (
      <div className="container">

        <SearchForm from={this.props.from} to={this.props.to}/>
        <br />
        <hr />
        <br/>


        <Home from={this.state.from} to={this.state.to} selectedFlight={this.state.selectedFlight}/>

      </div>
    ); //return
  } //render
} //Search class

export default Search;
