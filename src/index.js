import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import "./CSS/App.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <App /> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
