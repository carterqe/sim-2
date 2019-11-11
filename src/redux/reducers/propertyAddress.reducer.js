const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
const CHANGE_CITY = 'CHANGE_CITY'
const CHANGE_STATE = 'CHANGE_STATE'
const CHANGE_ZIP = 'CHANGE_ZIP'
const CHANGE_IMAGE_URL = 'CHANGE_IMAGE_URL'
const CHANGE_MONTHLY_MORTGAGE_AMOUNT = 'CHANGE_MONTHLY_MORTGAGE_AMOUNT'
const CHANGE_DESIRED_MONTHLY_RENT = 'CHANGE_DESIRED_MONTHLY_RENT'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      state.name = action.value
      return {...state}
    case CHANGE_ADDRESS:
      state.address = action.value
      return {...state}  
    case CHANGE_CITY:
      state.city = action.value
      return {...state} 
    case CHANGE_STATE: 
      state.state = action.value
      return {...state}
    case CHANGE_ZIP:
      state.zip = action.value
      return {...state}
    case CHANGE_IMAGE_URL:
      state.image_url = action.value
      return {...state}
    case CHANGE_MONTHLY_MORTGAGE_AMOUNT:
      state.monthly_mortgage_amount = action.value
      return {...state}   
    case CHANGE_DESIRED_MONTHLY_RENT:
      state.desired_monthly_rent = action.value
      return {...state}     
    default:
      return state
  }
}