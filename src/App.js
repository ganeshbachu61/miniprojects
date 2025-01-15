import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import DataFetch from './components/FetchApi/FetchApi';
import ToDo from './components/ToDoList/ToDo';
import AppItems from './components/Search/Search';
import CountDownTimer from './components/Countdown/Countdown';
import MiniProjects from './Pages/MiniProjects';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MiniProjects/>}/>
        <Route path='/search' element={<AppItems/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='/fetch' element={<DataFetch/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/countdown' element={<CountDownTimer/>}/>
      </Routes>
    </div>
  );
}

export default App;
