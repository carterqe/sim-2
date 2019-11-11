import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Step1.css'

class Step1 extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  changeHandler = ({name, value}) => {
    this.setState({
        [name]: value
    })
  }

  render() {
    return(
    <div className="step1-body">
      <div className="form-container">
        <h1>Add New Listing</h1>
          <form>
            <div className="step1-input">
              <label>Property Name: </label>
              <input type="text" name="name" onChange={(e) => this.props.onChangePropertyName(e.target.value) }/>
            </div>
            <div className="step1-input">
              <label>Address: </label>
              <input type="text" name="address" onChange={(e) => this.props.onChangeAddress(e.target.value) }/>
            </div>
            <div className="step1-input">
              <label>City: </label>
              <input type="text" name="city" onChange={(e) => this.props.onChangeCity(e.target.value) }/>
            </div>
            <div className="step1-input">
              <label>State: </label>
              <input type="text" name="state" onChange={(e) => this.props.onChangeState(e.target.value) }/>
            </div>
            <div className="step1-input">
              <label>Zip: </label>
              <input type="text" name="zip" onChange={(e) => this.props.onChangeZip(e.target.value) }/>
            </div>
          </form>
          <Link to="/wizard/step2"><button className="step2-link">Next Step</button></Link>  
          <Link to="/"><button className="cancel-button">Cancel</button></Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangePropertyName: (value) => dispatch({type: 'CHANGE_NAME', value}),
  onChangeAddress: (value) => dispatch({type: 'CHANGE_ADDRESS', value}),
  onChangeCity: (value) => dispatch({type: 'CHANGE_CITY', value}),
  onChangeState: (value) => dispatch({type: 'CHANGE_STATE', value}),
  onChangeZip: (value) => dispatch({type: 'CHANGE_ZIP', value}),
});

export default connect(null, mapDispatchToProps)(Step1)