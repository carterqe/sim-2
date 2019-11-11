import React, { Component } from 'react'
import Property from './Property/Property'
import { connect } from 'react-redux'
import './PropertyList.css'
import { deleteProperty } from '../../../redux/reducers/property.reducer'
import { Link } from 'react-router-dom'

class PropertyList extends Component {


  render() {
    const { properties } = this.props;
    return(
      <div className="property-list-container">
        <h1>Dashboard</h1>
        <Link to = "/wizard/step1"><button type="button" className="step1-link">Add New Property</button></Link>
        <hr />
        <h2>Home Listings</h2>
        {
          properties.map((property) => 
              <Property  
                deleteHandler={(id) => this.props.deleteProperty(id)} 
                property={property} 
                key={property.id}/>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteProperty: (id) => dispatch(deleteProperty(id))
});

const mapStateToProps = (state) => {
  return {
    properties: state.properties,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList)