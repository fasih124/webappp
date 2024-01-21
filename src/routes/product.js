import express from 'express';
import producttab from '../controllers/product.js';
const router = express.Router();


router.get('/', producttab.getproducttab);
router.get('/producttabAdd', producttab.getproductform);
router.get('/:id', producttab.getproductdetail);

router.post('/',producttab.addproduct);

router.delete('/:id', producttab.deleteproduct);

router.put('/:id', producttab.updateproduct);

// app.get('/something')                -get all records
// app.post('/something')               -create a new record
// app.get('/something/:id')            -get a single record
// app.put/patch('/something/:id')      -update a record
// app.delete('/something/:id')         -delete a record

export default  router;