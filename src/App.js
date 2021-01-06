import React from 'react';
import './App.css';
// import SeatSelection from './components/SeatSelection';
// import Home from './components/Home';
// import UserButton from './components/UserButton';
// import SearchForm from './components/SearchForm';
// import SeatSelector from './components/SeatSelector';
import SelectedFlight from './components/SelectedFlight';
import Search from './components/Search';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import FlightDetails from './components/FlightDetails';
import { Route, Link, HashRouter as Router} from 'react-router-dom';


class App extends React.Component {
  state = {
    seatSelection: '4B',
    selectedFlight: 75
  };

  handledSeatSelected = (seatSelected) => {
    this.setState({seatSelected})
  }

  fetchFromVal = (fromVal) =>{
    this.setState ({fromVal})
  }

  fetchToVal = (toVal) =>{
    this.setState ({toVal})
<<<<<<< HEAD
=======
  }

  updateUser = (currentUser) => {
    this.setState({currentUser})
>>>>>>> c181ba9b3dbac998374808afa10f325272959ecc
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Burnt Airlines</h1>
          <p>Good luck.</p>
        </header>
        <Router >
<<<<<<< HEAD
          <Route path ='/' component={Nav} />
=======
          <Route path ='/' render={(props)=><Nav currentUser={this.state.currentUser} updateUser={this.updateUser}/>} />
>>>>>>> c181ba9b3dbac998374808afa10f325272959ecc
          <Route exact path ='/' component={Welcome} />

        <Route exact path = "/search" render={(props)=><Search to={this.fetchToVal} from={this.fetchFromVal}/>} />

        <Route exact path = "/flight/:id" render={(props)=> < FlightDetails handleSeatSelected={this.handleSeatSelected} />} />
        </Router>

          <footer>
          <p> &copy; Burnt Airlines Inc. (Seriously, good luck.)</p>
          </footer>

      </div>
    );
  }
}

export default App;
// <SearchForm />
// <UserButton />
// <SeatSelector seatSelection={this.state.seatSelection}/>
// <Home />

//
// <p>Home</p>
// <Home />
// <SelectedFlight selectedFlight={this.state.selectedFlight} />
// <p>SearchForm</p>
// <SearchForm />
// <p>SeatSelection</p>
// <SeatSelection />
// <p>SeatSelector</p>
// <SeatSelector />
// <p>SelectedFlight</p>
// <SelectedFlight />
// <p>UserButton</p>
// <UserButton />
