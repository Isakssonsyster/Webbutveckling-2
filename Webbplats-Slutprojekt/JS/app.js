const express = require('express')
const mongoose = require('mongoose');
const dBModule = require('./dBModule')
const messageModule = require('./messageModule')
const app = express()
const http = require('http')
const port = 3000

const clientDir = "./../";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(clientDir))

app.set('views' , './../');
app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
  res.render("index")
});

app.get('/info', (req, res) => {
  res.render("info")
});

app.get('/contactUs', (req, res) => {
  res.render("contactUs")
});

app.get('/howFeeling', async(req, res) => {
  var feelings = await messageModule.getFeeling()
  res.render("howFeeling", {feeling: feelings})
});

app.post('/howFeeling', (req, res) => {

  var Person = messageModule.createFeeling(req.body.greeting, req.body.howFeeling, req.body.Why, req.body.TalkMore);
  dBModule.saveInput(Person)

    res.redirect('howFeeling') 
})



app.listen(port, () => console.log(`Example app listening on port port ${port}!`))