const {signup , login } = require('../controller/authcontroller')
const express = require('express');
const router = express.Router();

router.post('/signup' , signup);
router.post('/login' , login);

module.exports = router;
