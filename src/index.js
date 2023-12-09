import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const newDate = new Date("Dec 24, 2023 00:00:00").getTime();
const now = new Date().getTime();
const timeRemaining = newDate - now;

const days = Math.floor(timeRemaining / (1000 *60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 *60*60*24)/ (1000 * 60 * 60)));
const mintues = Math.floor((timeRemaining % (1000*60*60)/ (1000* 60)));
const seconds = Math.floor((timeRemaining % (1000* 60)/ 1000));



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);