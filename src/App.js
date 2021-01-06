import React from 'react';
import './App.css';
// import SeatSelection from './SeatSelection';
// import Home from './Home';
// import UserButton from './components/UserButton';
// import SearchForm from './components/SearchForm';
 import SeatSelector from './components/SeatSelector';

class App extends React.Component {
  state = {
    seatSelection: '4B',
  };

  render() {
    return (
      <div className="App">
        <SeatSelector seatSelection={this.state.seatSelection}/>
      </div>
    );
  }
}

export default App;
// <SearchForm />
// <UserButton />
// <Home />
// <SeatSelection />
