const express = require('express');
const router = express.Router();
const getData = require("./controller/getData")


router.get('/getData' , getData);

module.exports = router ;