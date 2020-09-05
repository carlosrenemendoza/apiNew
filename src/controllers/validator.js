'use strict'

// const items = require('../models/items')
const users = require('../models/users')

const values = {
    POST:['name','post','title'],
    PUT :[]
}

exports.init = (req,res,next)=>{
    let errors = []
    values['POST'].forEach((e)=>{
        if(!req.body[e]){
            errors.push({
                error : 'field '+e+' is required in request'
            })
        }
    })
    if(errors.length > 0) return res.status(401).send({
        message : 'Se han presentado algunos errores',
        error : errors
    })
    next()
}

exports.userExists =  (req,res,next)=>{
    users.findOne({
        email : req.body.email,
        password : req.body.password
    },(err,resp)=>{
        if(err) return res.status(500).send({
            message : 'Ha ocurrido un error interno'
        })
        if(!resp) return res.send({
            message : 'El usuario solicitado no se encuentra disponible'
        })
        next()
    })
}