import React, { Component } from 'react'
import Home from './container/home/home'
import Collections from './container/Collection/Collection'
import Try from './container/tryUseConnect/try'
import Navbar from './components/navbar/navbar'
import Login from './container/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import store from './store'
import { Provider } from 'react-redux'

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
      <Provider store={ store }>
        <Router>
          <Switch>

              <PrivateRoute login={this.state.isLogin} path="/collections">
                <Navbar />
                <Collections />
              </PrivateRoute>
              
              <Route path="/login">
                {this.state.isLogin ? <Redirect to="/" /> : <Login setLogin={ this.setLogin } />}
              </Route>

              <Route path="/try">
                <Try />
              </Route>
              
              <Route path="/">
                <Navbar />
                <Home />
              </Route>


          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
