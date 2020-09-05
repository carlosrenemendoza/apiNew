'use strict'
const post = require('../models/users')
var newDate = new Date();

exports.saveData = (req,res,next)=>{
    req.body.newDate = newDate
    req.body.lastEdition = ''
    new post(req.body).save((err,resp)=>{
        if(err) return res.status(500).send({
            message : 'Ha ocurrido un error interno'
        })
        res.send({
            message : 'Se ha guardado con exito la informacion',
            id : resp._id
        })
    })
}