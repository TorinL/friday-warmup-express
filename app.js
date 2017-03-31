const express = require('express');
const request = require('request');
const requestPromise = require('request-promise');
const bodyParser = require('body-parser');
const players = require('./players.js');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.get('/players', home)
app.post('/players', postRoute)

function home (req, res){
  res.send('hello')
}

function postRoute(req,res){
  var phrase = (req.body.phrase.toUpperCase())
  res.send(phrase)
}

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})
