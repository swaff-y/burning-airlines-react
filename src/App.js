// import logo from './logo.svg';
import './App.css';
import SeatSelection from './SeatSelection';
import Home from './Home';
import UserButton from './components/UserButton';

function App() {
  return (
    <div className="App">
      <UserButton />
      <Home />
      <SeatSelection />
      </div>
  );
}

export default App;
