import React from 'react'
import './Property.css'

const Property = (props) => (
  <div className="property-container">
    <div className="image-container">
      <img src={props.property.image_url} alt="property img"/>
    </div>
    <div className="address-container">
      <h4>Property Name: {props.property.name}</h4>
      <h4>Address: {props.property.address}</h4>
      <h4>City: {props.property.city}</h4>
      <h4>State: {props.property.state}</h4>
      <h4>Zip Code: {props.property.zip}</h4>
    </div>
    <div className="budget-container"> 
      <h4>Monthly Mortgage Amount: {props.property.monthly_mortgage_amount}</h4>
      <h4>Desired Monthly Rent: {props.property.desired_monthly_rent}</h4>
    </div>
    <button className="delete-button" onClick={() => props.deleteHandler(props.property.id)}>X</button>
  </div>
)

export default Property;