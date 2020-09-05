'use strict'

const post = require('../models/users')
const moment = require('moment');

exports.list = (req,res,next)=>{
    post.find({
    },(err,resp)=>{
        if(err || resp.length < 1) return res.status(500).send({
            message : 'Ha ocurrido un error interno'
        })
        let results = []
        resp.forEach((e)=>{
            results.push({
                id : e._id,
                name : e.name,
                title : e.title,
                post : e.post,
                image : e.img,
                lastEdition: e.lastEdition ? e.lastEdition : '',
                newDate:e.newDate ? e.newDate  : ''
            })
        })
        res.send({
            status : 'success',
            code : 200,
            data : results
        })
    })   
}
