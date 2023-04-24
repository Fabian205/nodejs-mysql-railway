const express = require('express');
const router = express.Router();

const pool = require("../db.js");
//const pool = db.pool;

router.get('/add', (req,res)=>{
	res.render('links/add');
});

router.post('/add', async (req,res)=>{
	const { name, price, description } = req.body;
  const newLink = {
    name,
    price,
    description  
  };
  await pool.query("INSERT INTO product set ?", [newLink]);
  //res.send("received");
  res.redirect('/links');
});


router.get("/",  async (req, res) => {
  const products = await pool.query("SELECT * FROM product" );
  const gts = (products[0]);
  //console.log(gts);
  //res.send('Received list of links');
  res.render("links/list", { gts });
  //res.json(gts);
});

module.exports = router;