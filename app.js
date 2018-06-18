var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
Genre = require('./models/genre')
Book = require('./models/book')

app.use(bodyParser.json())

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

/**
 * Post request for adding genre
 * end point could be same as long as you make different request
 */
app.post('/api/genres/', (req, res)=>{
  var genre = req.body
  Genre.addGenre(genre,(err, genre)=>{
    if(err) throw err
    res.json(genre)
  })
})

/**
 * put request for updating genre
 * end point could be same as long as you make different request
 */
app.put('/api/genres/:_id', (req, res)=>{
  var id = req.params._id
  var genre = req.body
  Genre.updateGenre(id, genre,{},(err, genre)=>{
    if(err) throw err
    res.json(genre)
  })
})

app.get('/api/books/', (req, res)=>{
  Book.getBooks((err, books)=>{
    if(err) throw err
    res.json(books)
  })
}) 
 

app.get('/api/books/:_id', (req, res)=>{
  Book.getBookById(req.params._id, (err, book)=>{
    if(err) throw err
    res.json(book)
  })
})

/**
 * Post request for adding book
 * end point could be same as long as you make different request
 */
app.post('/api/books/', (req, res)=>{
  /**
   * this should not be used in production level app
   * instead add and validate attribute one by one
   */
  var book = req.body
  Book.addBook(book,(err, book)=>{
    if(err) throw err
    res.json(book)
  })
})

/**
 * put request for updating book
 * end point could be same as long as you make different request
 */
app.put('/api/books/:_id', (req, res)=>{
  var id = req.params._id
  var book = req.body
  Book.updateBook(id, book,{},(err, book)=>{
    if(err) throw err
    res.json(book)
  })
})

app.listen(3000)
console.log('running on port 3000')
  