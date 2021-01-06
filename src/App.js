import React from 'react';
import './App.css';
import SeatSelection from './components/SeatSelection';
import Home from './components/Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';
import SeatSelector from './components/SeatSelector';
import SelectedFlight from './components/SelectedFlight';


class App extends React.Component {
  state = {
    seatSelection: '4B',
    selectedFlight: 1
  };

  handledSeatSelected = (seatSelected) => {
    this.setState({seatSelected})
  }

  render() {
    return (
      <div className="App">

        <SelectedFlight selectedFlight={this.state.selectedFlight} />



      </div>
    );
  }
}

export default App;
// <SearchForm />
// <UserButton />
// <SeatSelector seatSelection={this.state.seatSelection}/>
// <Home />
// <SeatSelection />
