import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import House from './Components/House/House'
import { HashRouter, Link } from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }


  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    )
  }
}