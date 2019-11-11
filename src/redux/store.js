import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import properties from './reducers/property.reducer'
import propertyAddress from './reducers/propertyAddress.reducer'

export default (state = {}) => {
  const middleware = [thunkMiddleware]
  const reducers = combineReducers({
    properties,
    propertyAddress,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  return createStore(reducers, state, enhancer)
}