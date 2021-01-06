import './App.css';
import SeatSelection from './components/SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
     <SearchForm />
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
