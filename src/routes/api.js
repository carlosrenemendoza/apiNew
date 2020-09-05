'use strict'

const api = require('express').Router()

module.exports = (()=>{
    api.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    
    api.get('/',(req,res,next)=>{
        message : 'API'
    })
    return api;
})()