import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Step2.css'

class Step2 extends Component {

  render() {
    return(
      <div className="step2-body">
        <div className="form-container2">
        <h1>Add New Listing</h1>
          <form>
            <div className="step2-input">
              <label>Image URL:</label>
              <input type="text" name="url" onChange={(e) => this.props.onChangeImageUrl(e.target.value) }/>
            </div>
          </form>
          <Link to="/wizard/step3"><button className="step3-link">Next Step</button></Link>
          <Link to="/wizard/step1"><button className="cancel-button">Cancel</button></Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeImageUrl: (value) => dispatch({type: 'CHANGE_IMAGE_URL', value}),
});

export default connect(null, mapDispatchToProps)(Step2)