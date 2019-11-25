import React, { Component } from 'react'
import Home from './container/home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      </Router>
    )
  }
}

export default App;
