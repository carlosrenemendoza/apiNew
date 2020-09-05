'use strict';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = require('bluebird');
const db = {
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  pass: process.env.DB_PASS,
  user: process.env.DB_USER
}
mongoose.set('debug', false);
/**
 * Only / db localhost:$port/
 */
const mProd = `mongodb://localhost/asDeporte`
 const connection = mongoose.connect(mProd, {
  useMongoClient: true
}, function (err) {
  if (err) {
    console.log('Unable to connect to database', db);
  } else {
    console.log('Connection to databse succesful');
  }
});
autoIncrement.initialize(connection);