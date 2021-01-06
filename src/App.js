import React from 'react';
import './App.css';
// import SeatSelection from './components/SeatSelection';
// import Home from './components/Home';
// import UserButton from './components/UserButton';
// import SearchForm from './components/SearchForm';
// import SeatSelector from './components/SeatSelector';
import SelectedFlight from './components/SelectedFlight';


class App extends React.Component {
  state = {
    seatSelection: '4B',
<<<<<<< HEAD
    selectedFlight: 75
=======
    selectedFlight: 13
>>>>>>> f296403d85d31611f08080d0ed61ac9c7c6de513
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
