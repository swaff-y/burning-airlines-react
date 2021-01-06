import React from 'react';
// import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
// import  from './';

const RAILS_FLIGHTS_BASE_URL = 'http://localhost:3000/flights.json'

class SearchForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          fromVal: '',
          toVal: '',
          data: [],
          destinationFrom: [],
          searchData:[]
      };
  };

  componentDidMount = () => {
    axios.get(RAILS_FLIGHTS_BASE_URL)
    .then((res)=>{
      console.log("data: ", res.data);
      this.setState({data: res.data});
    })
    .catch(console.warn);
  };

  onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
  }

  destinationFrom = () => {
    let arr = [];
    arr = this.state.data.map((data,index) => <option key={index} value={ data.from }>{ data.from }</option>);
    let unique = arr.filter(this.onlyUnique)
    return unique ;
  };

  showFlights =() =>{
    axios.get(SEARCH_API_URL)
    .then((res)=>{
      console.log('response:', res.data);
      this.setState({searchData:res.data}); //save into state
    })
    .catch(console.warn);
    }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("submited!!!", this.state.fromVal, this.state.toVal);
    showFlights()
  };

  handleChangeFrom = (ev) => {
    // this.setState({fromVal: ev.target.value})
    this.props.from(ev.target.value)
  };
  handleChangeTo = (ev) => {
    // this.setState({toVal: ev.target.value})
    this.props.to(ev.target.value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="from" className="form-label">From</label>
            <select className="form-select" aria-describedby="fromHelp" id="from" onChange={this.handleChangeFrom}>
              <option defaultValue="">Open this select menu</option>
              { this.destinationFrom() }
            </select>
          <div id="fromHelp" className="form-text">
            Where would you like to fly from?
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">To</label>
            <select className="form-select" aria-describedby="toHelp" id="to" onChange={this.handleChangeTo}>
              <option defaultValue="">Open this select menu</option>
                { this.destinationFrom() }
            </select>
          <div id="toHelp" className="form-text">
            Where would you like to fly to?
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    ); // return
  }; //render()
};
export default SearchForm;
