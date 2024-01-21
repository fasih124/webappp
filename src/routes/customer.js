import express from 'express';
import {addCustomer,getCustomerTab,getCustomerForm,getCustomerDetail,updateCustomerform,getCustomerInvoice ,deleteCustomer ,updateCustomer} from '../controllers/customer.js';
const router = express.Router();


router.get('/',getCustomerTab);  
router.get('/add',getCustomerForm);
router.get('/Detail/:id', getCustomerDetail);
router.get('/Detail/Edit/:id',updateCustomerform);
router.get('/customerinvoice', getCustomerInvoice);
// -----------------------------------------------------------------
router.post('/',addCustomer);
// -----------------------------------------------------------------
router.put('/Detail/Edit/:id',updateCustomer);
// -----------------------------------------------------------------
router.delete('/Detail/Edit/:id',deleteCustomer);
// router.delete('/',(req,res)=>{res.redirect('/Customer');}); 


//------------------------------------------------------------------
// app.get('/something')                -get all records
// app.post('/something')               -create a new record
// app.get('/something/:id')            -get a single record
// app.put/patch('/something/:id')      -update a record
// app.delete('/something/:id')         -delete a record

export default router;