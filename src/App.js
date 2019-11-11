import React, { Component } from 'react';
import { connect } from 'react-redux' // redux specific
import './App.css';
import Header from './components/Header/Header'
import { HashRouter } from 'react-router-dom'
import { initializePropertiesStore } from './redux/reducers/property.reducer' // redux specific
import routes from './routes'

class App extends Component {

  componentDidMount() {
    this.props.initializeProperties()
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

const mapDispatchToProps = (dispatch) => ({
  initializeProperties: () => dispatch(initializePropertiesStore())
});

export default connect(null, mapDispatchToProps)(App)