//Features: user log in, crud, framework(React), Firebase
//change 'crud', 'CRUD', or 'REPLACE' to app specific words

'use strict'
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const moment         = require('moment');
const bodyParser     = require('body-parser');
const app            = express();

/*----------------COMMAND PROMPT COMMANDS --------------*/

// npm install express morgan path moment body-parser pg-promise ejs bcrypt dotenv babelify babel-preset-react bebel-preset-es2015 browserify react react-dom react-router jquery --save

/*------------------Conditional Modules------------------*/

// npm install express-session connect-pg-simple lodash method-override pg --save

/*------------------Conditional User Sessions (for connect-pg-simple) Command------------------*/

//psql db_name_here < node_modules/connect-pg-simple/table.sql

/*------------------Bundle Command------------------*/
//check to see if app.js is actual entry point

//./node_modules/browserify/bin/cmd.js -t [ babelify --presets [react es2015 ] ] public/js/app.js -o public/js/bundle.js -d

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

app.get ('*', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
})

const port = process.env.PORT || 1337;
const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const server = app.listen(port, ()=>console.log('Server online, on port ' , port, ', Sir. Date and time is ' + time));
