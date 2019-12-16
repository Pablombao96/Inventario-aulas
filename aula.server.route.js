// ./express-server/routes/aula.server.route.js
import express from 'express';

//import controller file
import * as aulaController from '../controllers/aula.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(aulaController.getAulas)
     .post(aulaController.addAula)
     .put(aulaController.updateAula);

router.route('/:id')
      .get(aulaController.getAula)
      .delete(aulaController.deleteAula);

      router.route("/imagenes")
      .get(function(req, res){
            
      })
      .post(function(req, res){
            var data = {
                  title:req.body.title
            }
      })


export default router;
