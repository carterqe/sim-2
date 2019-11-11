import axios from 'axios'

const INIT_PROPERTIES = 'INIT_PROPERTIES'
const ADD_PROPERTY = 'ADD_PROPERTY'
const DELETE_PROPERTY = 'DELETE_PROPERTY'

export const initializePropertiesStore = () => async (dispatch) => {
  const { data } = await axios.get('/api/property')
  dispatch({type: INIT_PROPERTIES, data})
}

export const addProperty = () => async (dispatch, getState) => {
  const state = getState()
  const { data } = await axios.post(`/api/property`, state.propertyAddress)
  dispatch({type: ADD_PROPERTY, data})
  // if you can, route back to the dashboard
}

export const deleteProperty = (id) => async (dispatch) => {
  const { data } = await axios.delete(`/api/property/${id}`)
  
  dispatch({type: DELETE_PROPERTY, data})
}

export default (state = [], action) => {
  switch (action.type) {
    case INIT_PROPERTIES:
      return action.data
    case DELETE_PROPERTY:
      return action.data  
    case ADD_PROPERTY:
      return [...state, action.data]  
    default:
      return state
  }
}