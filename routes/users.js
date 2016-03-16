const express = require('express');
const users = express.Router();
const bodyParser     = require('body-parser');
const db             = require('./../db/users_pg');
const expressJWT     = require('express-jwt');
const jwt            = require('jsonwebtoken');

if(!process.env.NODE_ENV){
  require('dotenv').config();
}
const secret = process.env.SECRET;

// users.use('/me', expressJWT({secret: secret}))

users.get('/', (req, res)=>{
  res.json({data: 'sucess'});
})

users.post('/', db.createUser, (req, res)=>{
  res.status(201).json({data: 'sucess'});
})

users.post('/login', db.loginUser, (req, res)=>{
  var token = jwt.sign(res.rows, secret)

  res.json({agent: res.rows, token: token})
})

users.get('/me', (req, res)=>{
  res.json({data: 'sucess', agent: req.user})
})

module.exports = users;
