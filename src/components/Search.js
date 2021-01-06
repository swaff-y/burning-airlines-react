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
    to: '',
    searchData: []

  };

  fetchSearchData = (searchData) => {
    this.setState({searchData})
  }

  fetchFromVal = (fromVal) =>{
    this.setState({fromVal})
  }

  fetchToVal = (toVal) =>{
    this.setState({toVal})
  }

  render(){
    return (
      <div className="container">

        <div className="container w-25 p-1">
          <SearchForm from={this.fetchFromVal} to={this.fetchToVal} searchData={this.fetchSearchData}/>
        </div>
        <br />
        <hr />
        <br/>


        <Home from={this.state.from} to={this.state.to} selectedFlight={this.state.selectedFlight} searchData={this.state.searchData}/>

      </div>
    ); //return
  } //render
} //Search class

export default Search;
