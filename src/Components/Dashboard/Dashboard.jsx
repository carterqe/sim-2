import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <h1> dashboard </h1>
        <Link to = "/wizard">Add New Property</Link>
      </div>

    )
  }
}