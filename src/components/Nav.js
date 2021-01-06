import React from 'react';
import UserButton from './UserButton';
import axios from 'axios';
import { Route, Link, HashRouter as Router} from 'react-router-dom';


class Nav extends React.Component {

  constructor(props) {
    super(props);

  }


  welcome = (props) => {
    let print = ""
    if (this.props.currentUser.length > 0) {
      print = `Welcome, ${this.props.currentUser}`
    } else {
      print = ""
    }
    return print
  }

  render(){


    return (
      <div>
          <ul className="nav justify-content-center">
            <li className="navbar-toggler"><Link className="nav-link" to="/">Home</Link></li>
            <li className="navbar-toggler"><Link className="nav-link" to="/search">Search</Link></li>
            <li className="navbar-toggler"><UserButton updateUser={this.props.updateUser}/></li>
            <li className="nav-link">{this.welcome()}</li>
          </ul>
          <hr/>
      </div>
    );
  }
}

export default Nav;
