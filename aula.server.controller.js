// ./express-server/controllers/aula.server.controller.js
import mongoose from 'mongoose';

//import models
import Aula from '../models/aula.server.model';

export const getAulas = (req,res) => {
  Aula.find().exec((err,aulas) => {
    if(err){
    return res.json({'success':false,'message':'Error'});
    }

    return res.json({'success':true,'message':'Aulas recuperadas satisfactoriamente',aulas});
  });
}

export const addAula = (req,res) => {
  console.log(req.body);
  const newAula = new Aula(req.body);
  newAula.save((err,aula) => {
    if(err){
    return res.json({'success':false,'message':'Error'});
    }

    return res.json({'success':true,'message':'Aula añadida correctamente',aula});
  })
}

export const updateAula = (req,res) => {
  Aula.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,aula) => {
    if(err){
    return res.json({'success':false,'message':'Error','error':err});
    }
    console.log(aula);
    return res.json({'success':true,'message':'Actualizada correctamente',aula});
  })
}

export const getAula = (req,res) => {
  Aula.find({_id:req.params.id}).exec((err,aula) => {
    if(err){
    return res.json({'success':false,'message':'Error'});
    }
    if(aula.length){
      return res.json({'success':true,'message':'El aula con el id dado se ha encontrado',aula});
    }
    else{
      return res.json({'success':false,'message':'El aula con el id dado no se encuentra'});
    }
  })
}

export const deleteAula = (req,res) => {
  Aula.findByIdAndRemove(req.params.id, (err,aula) => {
    if(err){
    return res.json({'success':false,'message':'Error'});
    }

    return res.json({'success':true,'message':aula.nombre_aula+' borrada correctamente'});
  })
}
