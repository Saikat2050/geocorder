const router=require('express').Router();
const file=require('../controller/file');


router.get('/display',file.display);
router.post('/create',file.create);














module.exports=router;