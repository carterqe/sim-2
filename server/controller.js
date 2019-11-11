module.exports = {
  createProperty: (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip, image_url, monthly_mortgage_amount, desired_monthly_rent} = req.body
    db.create_property({
      name,
      address,
      city,
      state,
      zip,
      image_url, 
      monthly_mortgage_amount, 
      desired_monthly_rent,
    })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })  
  },
  readProperty: (req, res) => {
    const db = req.app.get('db')
    db.read_property()
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })  
  },
  updateProperty: (req, res) => {
    console.log(req)
    const db = req.app.get('db')
    const {name, address, city, state, zip, image_url, monthly_mortgage_amount, desired_monthly_rent} = req.body
    const {id} = req.params
    db.update_property([
      name,
      address,
      city,
      state,
      zip,
      image_url, 
      monthly_mortgage_amount, 
      desired_monthly_rent,
      id
    ])
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })
  },
  deleteProperty: (req, res) => {
    const db = req.app.get('db')
    db.delete_property(req.params.id)
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })
  },
}