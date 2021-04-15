const express = require('express');
const BootComp = require('../models/Bootcamp');
const app = express();

/*CRUD CONTROLLERS*/
//GET-ONE 
//@route GET /api/v1/bootcamps
//@access public
exports.getOneBootcamp = async (req,res)=>{
   // console.log('GetOne: [GET] / Bootcomp/i:d');
    try{

        const bootcomp = await BootComp.findById(req.params.id);

        if(!bootcomp){
           return res.status(404). json({
                succsses: false,
                msg:`no Bootcamp with such id: ${req.params.id}`
            })
        }

            res.json({
                    succsses: true,
                    msg:`Showing  Bootcomp with id:${req.params.id}`,
                    data: bootcomp 
                })
    }catch (err){
       res.status(400).json({succsses:false, msg:err});
      // console.log(err);
    }
}

//GET-ALL
//@route GET /api/v1/bootcamps/:id
//@access public
exports.getAllBootcamp = async (req,res,next)=>{
 // console.log("getAll: [GET] / Bootcomp/");
   try{

    const  bootcamps = await BootComp.find();
       res.json({
           succsses: true,
           msg:'Showing a list of All BootComp in the DataBase',
           data: bootcamps
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
       
       const bootcomp = await BootComp.findByIdAndUpdate(req.params.id,req.body,{
           runValidators: true,
           new: true
       }); 
       
       if(!bootcomp){
        return  res.status(404).json({
             succsses:false,
             msg: `Filed no Bootcomp with this Id: ${req.params.id}`
          });
      }

       res.status(200).json({succsses:true, msg:`Update Bootcomp ${req.params.id}`,data:bootcomp });
      
    }catch(err){

         res.status(400).json({succsses: false, msg: err})
    }
}
// CREATE-ONE 
//@route POST /api/v1/bootcamps
//@access private
exports.createOneBootcamp = async(req,res, next)=>{ 
   // console.log('Create: [POST] /Bootcomp');
    try{

       const bootcomp = await BootComp.create(req.body);
       
        res.status(201). json({
            succsses: true,
            msg: ' one Bootcomp Created',
            data: bootcomp
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
        const bootcamps = await BootComp.findByIdAndDelete(req.params.id);
               res.json({
           succsses: true,
           msg: `Bootcomp  with id: ${req.params.id} Deleted `,
           data: {}
       })
    }catch(err){
        console.log(err);
    }
}