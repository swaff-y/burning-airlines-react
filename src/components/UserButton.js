import React from 'react';
// import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import  from './';

const RAILS_USERS_BASE_URL = 'https://burning-airlines-2021.herokuapp.com/users.json';

class UserButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          currentUser: []
      };
  };

  componentDidMount(){
    axios.get(RAILS_USERS_BASE_URL)
    .then((res)=>{
      // console.log("data: ", res.data);
      this.setState({data: res.data});
    })
    .catch(console.warn);
  }

  // updateUser = (user) => {
  //   this.setState({currentUser: user});
  //   console.log(this.state.);
  // // }
  // {this.state.active ? 'your_className': null}

  handleClick = (ev) => {
    console.log(ev);
    console.log("clicked value:", ev.target.innerText, ev.target.id);
    this.props.updateUser(ev.target.innerText, ev.target.id);
  }

  // toggleActiveUser = (user) => {
  //   this.state.data.forEach(function(item) {
  //     if (this.props.currentUser === ){}
  //   }//forEach
  // }//toggleActiveUser

  render() {
    const selectedUser=this.state.data.name;

    const button = this.state.data.map((data)=> <li key={data.id} className="dropdown-item" id={data.id} onClick={(e)=> this.handleClick(e)}>{data.name}</li>)

    return (
    <div className="dropdown">
      <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
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
