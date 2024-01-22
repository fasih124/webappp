import invoice from '../controllers/invoice.js';
import express from 'express';
const router = express.Router();

router.get('/', invoice.getInvoicetab);
router.post('/', invoice.addinvoice);

router.get('/invoiceAdd', invoice.getinvoiceform);
router.get('/:id', invoice.getinvoicedetail);



// app.get('/something')                -get all records
// app.post('/something')               -create a new record
// app.get('/something/:id')            -get a single record
// app.put/patch('/something/:id')      -update a record
// app.delete('/something/:id')         -delete a record

export default  router;


