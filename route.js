const express = require('express');
const router = express.Router();
const getData = require("./controller/getData");
const formData = require('./controller/formData');
const sendForm = require('./controller/sendForm');











router.get('/getData' , getData);
router.post('/data' , formData);
router.get('/form' , sendForm);

module.exports = router ;