const express = require('express');
const router = express.Router();

const pool = require("../db.js");
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
  res.redirect('/links');
});


router.get("/",  async (req, res) => {
  const products = await pool.query("SELECT * FROM product" );
  const gts = (products[0]);  
  res.render("links/list", { gts });
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM product WHERE ID = ?", [id]);
  //req.flash('success','Link remove successfully');
/*   notifier.notify({
    title: 'Id: ' + [id],
    message: 'Link deleted successfully!'
  }); */
  res.redirect("/links");
});

router.get("/edit/:id",  async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM product WHERE ID = ?", [id]);
  const idedit = links[0];
  // Para ver solo un objeto no dentro de un arreglo
  //const idedit2 = idedit[0];
  res.render("links/edit", { link: idedit[0] });
});

router.post("/edit/:id",  async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const { name, price, description } = req.body;
  const newLinkEdit = {
    name,
    price,
    description
  };
  await pool.query("UPDATE product set ? WHERE id=?", [newLinkEdit, id]);
  //req.flash('success','Link updated successfully');
  //notifier.notify({
    //title: 'Id: ' + [id],
    //message: 'Link updated successfully!'
  //});
  res.redirect("/links");
});


module.exports = router;