'use strict'

exports.allowed = (req,res,next)=>{
    console.log('-->')
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
}