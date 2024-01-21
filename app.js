// const express = require("express");
import express from 'express';
const app = express();

const port = 3000;

import homeRouter from './src/routes/home.js';
import customerRouter from './src/routes/customer.js';
import productRouter from './src/routes/product.js';
import invoiceRouter from './src/routes/invoice.js';
import settingRouter from './src/routes/setting.js';

//middeware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views",'./src/views');

//routes
//home
app.use("/Home", homeRouter);
app.get("/", (req, res) => {
  res.redirect("/Home");
});
//customer
app.use("/Customer", customerRouter);
//product
app.use("/Product", productRouter);
//invoice
app.use("/Invoice", invoiceRouter);
//setting
app.use("/Setting", settingRouter);




app.listen(port, () => console.log(`Server running on port ${port}`));

// app.get('/something')                -get all records
// app.post('/something')               -create a new record
// app.get('/something/:id')            -get a single record
// app.put/patch('/something/:id')      -update a record
// app.delete('/something/:id')         -delete a record
