import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import DataFetch from './components/FetchApi/FetchApi';
import ToDo from './components/ToDoList/ToDo';
import AppItems from './components/Search/Search';
import CountDownTimer from './components/Countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Counter/>
      <DataFetch/>
      <ToDo/>
      <CountDownTimer/>
    </div>
  );
}

export default App;
