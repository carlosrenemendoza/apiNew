'use strict'

const api = require('express').Router()

const validator = require('../controllers/validator')
const update = require('../controllers/update')

module.exports = (()=>{
    api.put('/:id',
        validator.init,
        update.updateData
    )
    return api;
})()