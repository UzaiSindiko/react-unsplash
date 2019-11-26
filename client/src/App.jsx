import React, { Component } from 'react'
import Home from './container/home/home'
import Collections from './container/Collection/Collection'
import Navbar from './components/navbar/navbar'
import Login from './container/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

class App extends Component {

  state = {
    isLogin: true,
  }

  setLogin = (value) => {
    this.setState({ isLogin: value })
  }

  render() {
    return (
      <div>
      <Router>
      <Switch>

         <PrivateRoute login={this.state.isLogin} path="/collections">
            <Navbar />
            <Collections />
          </PrivateRoute>
          
          <Route path="/login">
            {this.state.isLogin ? <Redirect to="/" /> : <Login setLogin={ this.setLogin } />}
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
          </Route>

          
      </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
