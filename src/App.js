import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./CSS/content.css"
import Nav from "./components/NavBar"
import Machines from './pages/Machine-Learning';

function App() {
  return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Machine-learning" component={Machines}/>
        </Switch>
      </Router>
  );
}

export default App;


