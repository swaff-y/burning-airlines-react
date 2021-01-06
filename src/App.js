import React from 'react';
import './App.css';

import SeatSelection from './components/SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';
import SeatSelector from './components/SeatSelector';

class App extends React.Component {
  state = {
    seatSelection: '4B',
    seatSelected: '',
  };

  handledSeatSelected = (seatSelected) => {
    this.setState({seatSelected})
  }

  render() {
    return (
      <div className="App">
        <SeatSelector seatSelection={this.state.seatSelection} handledSeatSelected={this.handledSeatSelected}/>
          <SearchForm />
          <UserButton />
          <Home />
          <SeatSelection />
      </div>
    );
  }
}

export default App;
