'use strict'
const express = require('express');
const db      = require('./../db/crud_pg');

const cruds = express.Router();

cruds.route('/')
  .get(db.showCRUDS, (req,res)=>res.json(res.rows))
  .post(db.addCRUD, (req,res)=>res.json(res.rows));

cruds.route('/:id')
  .get(db.showCRUDS, (req, res)=>res.json(res.rows))
  .put(db.updateCRUD, (req, res)=>res.json(res.rows))
  .delete(db.deleteCRUD, (req, res)=>res.json(res.rows));

module.exports = cruds;
