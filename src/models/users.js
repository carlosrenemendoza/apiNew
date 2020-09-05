'use strict';
const database = require('../database'),
	mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema;

let users = new Schema({
	_id: Number,
	name: String,
    title: String,
	post:String,
	img:String,
	newDate	:Date,
	lastEdition:Date
});
users.plugin(autoIncrement.plugin, 'users');
module.exports = mongoose.model('users', users, 'users');