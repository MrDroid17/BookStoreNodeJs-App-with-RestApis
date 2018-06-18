var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
Genre = require('./models/genre')
Book = require('./models/book')

//db connections
mongoose.connect('mongodb://localhost:27017/bookstoredb')
var db = mongoose.connection

app.get('/', (req, res)=>{
  res.send('Please use /api/books or /api/genre')
})

app.get('/api/genres/', (req, res)=>{
  Genre.getGenres((err, genres)=>{
    if(err) throw err
    res.json(genres)
  })
})

app.get('/api/books/', (req, res)=>{
  Book.getBooks((err, books)=>{
    if(err) throw err
    res.json(books)
  })
})

app.listen(3000)
console.log('running on port 3000')
  