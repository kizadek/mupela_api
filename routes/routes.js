const router = require('express').Router();
const controllers = require('../controllers/controllers');

router
    .get('/',controllers.getAllBootcamp)
    .post('/',controllers.createOneBootcamp);

router
    .get('/:id',controllers.getOneBootcamp)
    .put('/:id',controllers.updateOneBootcamp)  
    .delete('/:id',controllers.deleteOneBootcamp); 


 module.exports = router;  