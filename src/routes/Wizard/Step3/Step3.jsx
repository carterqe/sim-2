import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProperty } from '../../../redux/reducers/property.reducer'
import './Step3.css'

class Step3 extends Component {
  render() {
    return(
      <div className="step3-body">
        <div className="form-container3">
        <h1>Add New Listing</h1>
          <form>
            <div className="step3-input">
              <label>Monthly Mortgage Amount:</label>
              <input type="text" name="mortgage" onChange={(e) => this.props.onChangeMonthlyMortgageAmount(e.target.value) }/>
              <label>Desired Monthly Rent:</label>
              <input type="text" name="rent" onChange={(e) => this.props.onChangeDesiredMonthlyRent(e.target.value) }/>
              <Link to="/"><button type="button" onClick={() => this.props.submitHandler()} className="submit-button">Submit</button></Link>     
            </div>     
          </form>
          <Link to="/"><button className="cancel-button">Cancel</button></Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeMonthlyMortgageAmount: (value) => dispatch({type: 'CHANGE_MONTHLY_MORTGAGE_AMOUNT', value}),
  onChangeDesiredMonthlyRent: (value) => dispatch({type: 'CHANGE_DESIRED_MONTHLY_RENT', value}),
  submitHandler: () => dispatch(addProperty()),
});

export default connect(null, mapDispatchToProps)(Step3)