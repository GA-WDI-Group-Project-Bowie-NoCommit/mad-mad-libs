const pgp = require('pg-promise')({});
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

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

function loginUser(req, res, next){
  const email = req.body.email
  const password = req.body.password

  db.one(`SELECT * FROM users WHERE email LIKE $1`, [email])
  .then((data)=>{

    if(bcrypt.compareSync(password, data.password_digest)){
      res.rows = data
      next()
    } else {
      res.rows = "Password and email do not match"
      next()
    }

  })
  .catch(()=>{
    console.error('error finding user')
  })
}

function createSecure(name, email, password, callback){

  bcrypt.genSalt((err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{

      callback(name, email, hash)
    })
  })
}

function createUser(req, res, next){
  createSecure(req.body.name, req.body.email, req.body.password, saveUser);

  function saveUser(name, email, hash){
    db.none(`INSERT INTO users(name, email, password_digest) VALUES ($1, $2, $3);`,
    [name, email, hash])
    .then((data)=>{
      console.log(data)
      next()
    })
    .catch(()=>{
      console.log('error signing up')
    })
  }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
