const router = require('express').Router();
const controllers = require('../controllers/controllers');

router
    .route('/')
        .get(controllers.getAllBootcamp)
        .post(controllers.createOneBootcamp);

router
    .route('/:id')
        .get(controllers.getOneBootcamp)
        .put(controllers.updateOneBootcamp)  
        .delete(controllers.deleteOneBootcamp); 


 module.exports = router;  