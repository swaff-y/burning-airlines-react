import React from 'react';
import UserButton from './UserButton';
import axios from 'axios';
import { Route, Link, HashRouter as Router} from 'react-router-dom';


class Nav extends React.Component {

  constructor(props) {
    super(props);

  }


  render(){


    return (
      <div>
          <ul className="nav justify-content-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
            <li className="nav-link"><UserButton updateUser={this.props.updateUser}/></li>
          </ul>
          <hr/>
      </div>
    );
  }
}

export default Nav;
