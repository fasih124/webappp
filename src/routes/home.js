// const express = require("express"); // CommonJS
import express from 'express';
const router = express.Router();

import {InvoiceRecords} from "../models/db_invoice.js";
import {getSeller} from "../models/db_seller.js";





router.get("/", (req, res) => {
  res.redirect("/Home/Login.html");
  
});

 
router.get("/Login.html", async (req, res) => {
  const Seller=await getSeller(1);
  res.render('Home/Login',{data:Seller});
});

router.get("/app.html",async (req,res)=>{
  const allInvoiceData= await InvoiceRecords();
  res.render('Home/app',{tab: 'Dashboard', data:allInvoiceData});
});
    
router.get("/signup.html", (req, res) => {
  res.render('Home/signup');
});



// module.exports = router;  // CommonJS
export default router;