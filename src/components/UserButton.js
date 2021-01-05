import React from 'react';
// import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import  from './';

const RAILS_USERS_BASE_URL = 'http://localhost:3000/users.json';

class UserButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
  };

  componentDidMount(){
    axios.get(RAILS_USERS_BASE_URL)
    .then((res)=>{
      console.log("data: ", res.data);
      this.setState({data: res.data});
    })
    .catch(console.warn);
  }

  render() {
    const button = this.state.data.map((data)=> <li key={data.id}><a className="dropdown-item" href="http://localhost:3000/" > {data.name} </a></li>)
    return (
    <div className="dropdown">
      <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      User
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {
        button
      }
      </ul>
    </div>
  )// return
  }; //render()
};
export default UserButton;
