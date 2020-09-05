'use strict'

const api = require('express').Router()

const create = require('../controllers/create')
const validator = require('../controllers/validator')
const headers = require('../config/headers')

module.exports = (()=>{
    api.post('/product/',
        validator.init,
        create.saveData
    )
    return api;
})()