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
    selectedFlight: 13,
    currentUser: "",
    fromVal:'',
    toVal:''

  };

  handledSeatSelected = (seatSelected) => {
    this.setState({seatSelected})
  }

  fetchFromVal = (fromVal) =>{
    setState ({fromVal})
  }

  fetchToVal = (toVal) =>{
    setState ({toVal})
  }

  updateUser = (currentUser) => {
    this.setState({currentUser})
  }

  render() {
    return (
      <div className="App">

        <Router >
          <Route path ='/' render={(props)=><Nav updateUser={this.updateUser}/>} />
          <Route exact path ='/' component={Welcome} />
          <Route exact path = "/search" render={(props)=>{<Search to={this.fetchToVal} from={this.fetchFromVal}/>}} />
          <Route exact path = "/flight/:id" component={FlightDetails} />
        </Router>

          <footer>
            <br/>
            <hr/>
          <p> &copy; Burnt Airlines Inc. </p>
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
