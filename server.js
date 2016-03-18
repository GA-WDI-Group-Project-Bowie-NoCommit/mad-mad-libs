//Features: user log in, crud, ajax, framework(React)
//change 'crud', 'CRUD', or 'REPLACE' to app specific words

/*-------------------------MAD MAD LIBS SPECIFIC INSTRUCTIONS-------------------------*/

//The crud routes work, but they need to have their names switched out to our specific project and then adapted to fit our exact setup.
//Also, we still need to figure out some user sign up stuff. Right now we can sign in and out with a fake account, but it's not connected to the database and there's no way to make a new user.
//After the two issues above are fixed, we should have a pretty good starting point.

'use strict'
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const moment         = require('moment');
const bodyParser     = require('body-parser');
// const methodOverride = require('method-override'); //if using a form for PUT and DELETE.
// const pg            = require('pg');
// const session        = require('express-session');
// const pgSession      = require('connect-pg-simple')(session)
const db             = require('./db/crud_pg');
// const _              = require('lodash');
const app            = express();

/*----------------COMMAND PROMPT COMMANDS --------------*/

// npm install express morgan path moment body-parser pg-promise ejs bcrypt dotenv babelify babel-preset-react bebel-preset-es2015 browserify react react-dom react-router jquery --save

/*------------------Conditional Modules------------------*/

// npm install express-session connect-pg-simple lodash method-override pg --save

/*------------------Conditional User Sessions (for connect-pg-simple) Command------------------*/

//psql db_name_here < node_modules/connect-pg-simple/table.sql

/*------------------Bundle Command------------------*/
//check for if app.js is actual entry point

//./node_modules/browserify/bin/cmd.js -t [ babelify --presets [react es2015 ] ] public/js/app.js -o public/js/bundle.js -d

if(!process.env.NODE_ENV){
  require('dotenv').config();
}
const config = process.env.DATABASE_URL || {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

//const userRoutes = require(path.join(__dirname, '/routes/users'));
//const crudRoutes = require(path.join(__dirname, '/routes/cruds'));

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
//app.use('/users', userRoutes);
//app.use('/cruds', crudRoutes);

const port = process.env.PORT || 1337;
const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const server = app.listen(port, ()=>console.log('Server online, on port ' , port, ', Sir. Date and time is ' + time));
