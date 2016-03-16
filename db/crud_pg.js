'use strict'

const pgp = require('pg-promise')();

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

const db = pgp(config);

function showCRUDS (req, res, next){
  if (req.params.id){
    var queryString = `SELECT * FROM crud
                       WHERE id = ($1);`;
    var prep = [req.params.id];
  } else {
    var queryString = `SELECT * FROM crud;`;
    var prep;
  }
  db.any(queryString, prep)
  .then(function(data){
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.log(error);
  })
};

function addCRUD (req, res, next)  {

  db.one(`INSERT INTO crud (name, description)
          VALUES ($1, $2)
          returning id;`,
    [req.body.name, req.body.description]
  )

  .then(function(data){
    res.rows = data;
    next();
  })

  .catch(function(error){
    console.log(error);
  })

};

function updateCRUD (req, res, next)  {
  db.one(`UPDATE crud
          SET name=($1), description=($2)
          WHERE id=($3) returning id;`,
    [req.body.name, req.body.description, req.body.id]
  )

  .then(function(data){
    res.rows = data;
    next();
  })

  .catch(function(error){
    console.log(error);
  })

};

function deleteCRUD (req, res, next)  {

  db.one(`DELETE FROM crud
          WHERE id=($1) returning id;`,
    [req.body.id]
  )

  .then(function(data){
    res.rows = data;
    next();
  })

  .catch(function(error){
    console.log(error);
  })

};

module.exports.showCRUDS = showCRUDS;
module.exports.addCRUD = addCRUD;
module.exports.updateCRUD = updateCRUD;
module.exports.deleteCRUD = deleteCRUD;
