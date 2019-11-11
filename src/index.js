import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configStore from './redux/store' // redux specific
import { Provider } from 'react-redux' // redux specific
import * as serviceWorker from './serviceWorker';

const store = configStore() // redux specific

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
