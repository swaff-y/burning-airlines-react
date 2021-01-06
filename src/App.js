import './App.css';
import SeatSelection from './SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';
import SelectedFlight from './SelectedFlight';

function App() {
  setState={
    selectedFlight:[]
  }

  return (
    <div className="App">
     <SearchForm selectedFlight={this.state.selectedFlight}/>
     <UserButton />
     <Home />
     <SeatSelection />
    </div>
  );
}

export default App;
// <UserButton />
// <Home />
// <SeatSelection />
