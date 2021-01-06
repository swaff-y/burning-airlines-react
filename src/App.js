import React from 'react';
import './App.css';
import SeatSelection from './components/SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  state = {
    seatSelection: '4B',
  };

  render() {
    return (
      <div className="App">
      <SearchForm />
      <UserButton />
      <Home />
      <SeatSelection />
      </div>
    );
  }
}

export default App;

// {<SeatSelector seatSelection={this.state.seatSelection}/>}
