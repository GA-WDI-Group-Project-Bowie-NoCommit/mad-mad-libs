//Features: user log in, crud, framework(React), Firebase

'use strict'
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const moment         = require('moment');
const bodyParser     = require('body-parser');
const app            = express();

const request        = require('request');

const wordnik  = require('./routes/wordnik');

if(!process.env.NODE_ENV){
  require('dotenv').config();
}

if(process.env.NODE_ENV === 'dev'){
  app.use(logger('dev'));
} else {
  app.use(logger('common'));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
})

app.use('/wordnik', wordnik);

app.get ('*', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
})

const port = process.env.PORT || 1337;
const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const server = app.listen(port, ()=>console.log('Server online, on port ' , port, ', Sir. Date and time is ' + time));
