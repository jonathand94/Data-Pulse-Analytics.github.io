// Estructura del CRUD
const router = require('express').Router();
const {
  crear,
} = require('../controllers/mycontactform')

router.post('/', crear)

module.exports = router;