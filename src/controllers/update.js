'use strict'

const user = require('../models/users')
var newDate = new Date();

exports.updateData = (req,res,next)=>{
    req.body.lastEdition = newDate    
    user.update({
        _id : req.params.id
    },{
        $set : req.body
    },(err,resp)=>{
        if(err) return res.status(500).send({
            message : 'Ha ocurrido un error interno'
        })
        res.send({
            message : 'El producto '+req.params.id +' ha sido actualizado'
        })
    })
}