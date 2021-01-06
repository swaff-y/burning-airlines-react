import React from 'react';
import axios from 'axios';
import '../App.css';


const AIRPLANE_API_URL = 'http://localhost:3000/flights/';

class SelectedFlight extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedFlight: ''

      };
  };

  componentDidMount(props){

    let URL = AIRPLANE_API_URL+this.props.selectedFlight
     // console.log(URL);
    axios.get(URL)
    .then((res)=>{
    console.log('response:', res.data);
    this.setState({selectedFlight:res.data}); //save into state
    })
    .catch(console.warn);
  } //componentDidMount

  render() {
    return (
    <div className="App">
      <p> testing selectedFlight </p>
      <p>{ URL.id } </p>

    </div>
    ); // return
  }; //render()
};



export default SelectedFlight
