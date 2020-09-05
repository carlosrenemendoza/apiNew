'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('body-parser').json());
app.use('/', require('./routes/api'));
app.use('/create', require('./routes/post'));
app.use('/update', require('./routes/put'));
app.use('/get', require('./routes/get'));
app.listen(3000, () => {
    console.log('ADS API http://127.0.0.1:' + 3000);
});