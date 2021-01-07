import React from 'react';
import './App.css';
import Confirmation from './components/Confirmation';
import SelectedFlight from './components/SelectedFlight';
import Search from './components/Search';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import FlightDetails from './components/FlightDetails';
import { Route, Link, HashRouter as Router} from 'react-router-dom';


class App extends React.Component {
  state = {
    // seatSelection: '',
    // selectedFlight: "",
    currentUser: [],
    currentUserID: []
  };

  fetchFromVal = (fromVal) =>{
    this.setState ({fromVal})
  }

  fetchToVal = (toVal) =>{
    this.setState ({toVal})
  }

  updateUser = (currentUser, currentUserID) => {
    this.setState({currentUser: currentUser})
    this.setState({currentUserID: currentUserID})
  }

  render() {
    return (
      <div className="App">
        <header>
          <br />
        </header>
        <Router >
          <Route path ='/' render={(props)=><Nav currentUser={this.state.currentUser} currentUserID={this.state.currentUserID} updateUser={this.updateUser}/>} />
          <Route exact path ='/' component={Welcome} />

        <Route exact path = "/search" render={(props)=><Search to={this.fetchToVal} from={this.fetchFromVal} userID={this.state.currentUserID}/>} />

        <Route exact path = "/flight/:flight_id/:user_id" component={FlightDetails} />
        <Route exact path = "/confirmation/:reservationid" component={Confirmation} />

        </Router>

          <footer>
            <hr />
          <p> &copy; Burnt Airlines Inc. <a href='http://localhost:3000/users'>Admin</a></p>
          </footer>

      </div>
    );
  }
}

export default App;
