import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Wizard extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    }
  }

createHandler(target, value) {
  this.setState({
    name: target.value
  })
}

  render() {
    return(
      <div>
        <h1>wizard</h1>
        <label>Name:</label>
        <input type="text" name="name" onChange={event => this.createHandler(event.target)}/>
        <Link to="/">Cancel</Link>
        <h2>works</h2>
      </div>
    )
  }
}
export default Wizard;