const MyContactForm = require('../models/MyContactForm')

function crear(req, res) {
  var myform = new MyContactForm(req.body)
  res.status(201).send(myform)
}

module.exports = {
  crear
}