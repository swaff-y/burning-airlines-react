import React from 'react';
import './App.css';
<<<<<<< HEAD
import SeatSelection from './components/SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';
=======
// import SeatSelection from './SeatSelection';
// import Home from './Home';
// import UserButton from './components/UserButton';
// import SearchForm from './components/SearchForm';
 import SeatSelector from './components/SeatSelector';
>>>>>>> d24e1219c474ebc2e3222da24e50950403644220

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
