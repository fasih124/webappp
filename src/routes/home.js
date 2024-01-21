// const express = require("express"); // CommonJS
import express from 'express';
const router = express.Router();



router.get("/", (req, res) => {
  res.redirect("/Home/Login.html");
  
});

 
router.get("/Login.html", (req, res) => {
  // res.sendFile(`${process.cwd()}/src/views/Home/Login.html`);// without ejs
  res.render('Home/Login');
});

router.get("/app.html", (req, res) => {
  // res.sendFile(`${process.cwd()}/src/views/Home/app.html`);// without ejs
  res.render('Home/app',{tab: 'Dashboard'});
});
    
router.get("/signup.html", (req, res) => {
  // res.sendFile(`${process.cwd()}/src/views/Home/signup.html`); // without ejs
  res.render('Home/signup');
});



// module.exports = router;  // CommonJS
export default router;