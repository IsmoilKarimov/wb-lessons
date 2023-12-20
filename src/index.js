import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './App';
import Fetch from './components/fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <State />
    {/* <Fetch /> */}
  </React.StrictMode>
);
