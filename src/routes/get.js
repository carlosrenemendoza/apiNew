'use strict'

const api = require('express').Router()
const get = require('../controllers/search')
module.exports = (()=>{
    api.get('/',
        get.list
    )
    return api;
})()