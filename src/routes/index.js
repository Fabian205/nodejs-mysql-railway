const express = require('express');
const router = express.Router();
//const pool = require("../db.js");


router.get("/", (req, res) => {
  //res.send('Welcome to the application')
  res.render('index');
});


module.exports = router;