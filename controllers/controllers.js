const express = require('express');
const app = express();

/*CRUD CONTROLLERS*/
//GET-ONE 
//@route GET /api/v1/bootcamps
//@access public
exports.getOneBootcamp = async (req,res)=>{
   // console.log('GetOne: [GET] / Bootcomp/i:d');
    try{
            res.json({
                    succsses: true,
                    msg:`Showing  Bootcomp with id:${req.params.id}`
                })
    }catch (err){
       console.log(err)
    }
}

//GET-ALL
//@route GET /api/v1/bootcamps/:id
//@access public
exports.getAllBootcamp = async (req,res,next)=>{
 // console.log("getAll: [GET] / Bootcomp/");
   try{
       res.json({
           succsses: true,
           msg:'Showing a list of All BootComp'
       }) 
   }catch(err){
       console.log(err);
   }
}

//UPDETe-ONE 
//@route PUT /api/v1/bootcamps/:id
//@access private
exports.updateOneBootcamp = async (req,res,next)=>{
    //console.log('Update: [PUT] /Bootcomp/:id');
    try{
        res.json({
           succsses:true,
           msg: `Update Bootcomp ${req.params.id}`
        });
    }catch(err){
       console.log(err);
    }
}
// CREATE-ONE 
//@route POST /api/v1/bootcamps
//@access private
exports.createOneBootcamp = async(req,res, next)=>{
   // console.log('Create: [POST] /Bootcomp');
    try{
        res.json({
            succsses: true,
            msg: 'Creating one Bootcomp',
            data: req.body
        })
    }catch(err){
      console.log(err);
    }
}

//DELETE-ONE 
//@route DELETE /api/v1/bootcamps/:id
//@access  private

exports.deleteOneBootcamp = async (req,res,next) =>{
   // console.log('Delete: [DELETE] /Bootcomp/');
    try{
       res.json({
           succsses: true,
           msg: `Bootcomp Deleted with id: ${req.params.id} `
       })
    }catch(err){
        console.log(err);
    }
}