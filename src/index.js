import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter } from 'react-router';
import AppItems from './components/Search/Search';
import ToDo from './components/ToDoList/ToDo';
import DataFetch from './components/FetchApi/FetchApi';
import Counter from './components/Counter/Counter';
import CountDownTimer from './components/Countdown/Countdown';

const router = createBrowserRouter([
  {
    path:"search",
    element:<AppItems/>
  },
  {
    path:"todo",
    element:<ToDo/>
  },
  {
    path:"fetch",
    element:<DataFetch/>
  },
  {
    path:"counter",
    element:<Counter/>
  },
  {
    path:"countdown",
    element:<CountDownTimer/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
