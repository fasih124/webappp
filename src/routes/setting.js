import express from 'express';
import Setting from '../controllers/setting.js';
const router = express.Router();

router.get('/',Setting.getsettingtab);
router.put('/:id',Setting.updateSettingtab);



// app.get('/something')                -get all records
// app.post('/something')               -create a new record
// app.get('/something/:id')            -get a single record
// app.put/patch('/something/:id')      -update a record
// app.delete('/something/:id')         -delete a record

export default  router;