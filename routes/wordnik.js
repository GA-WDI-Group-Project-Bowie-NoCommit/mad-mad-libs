const express       = require ('express');
const wordnik       = express.Router();

const request       = require('request')

const wotdlink      = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=';
const randomWordErr = 'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=';

wordnik.route('/wotd')
  .get(getWotd, (req,res)=>{
    // console.log(res.rows);
    res.json(res.rows);
  });

wordnik.route('/randomerror')
  .get(getRandomError, (req, res) => {
    res.json(res.rows);
  });

module.exports = wordnik;

function getWotd(req, res, next) {
  request(`${wotdlink}${process.env.API}`, (err, response, body) => {
    // console.log(body);
    var wotd = (JSON.parse(body));
    res.rows = wotd;
    next();
  })
};

function getRandomError(req, res, next) {
  request(`${randomWordErr}${process.env.API}`, (err, response, body) => {
    var randomerr = (JSON.parse(body));
    res.rows = randomerr;
    next();
  })
};
