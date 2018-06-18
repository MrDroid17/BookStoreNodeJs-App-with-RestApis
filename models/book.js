var mongoose = require('mongoose')

var bookSchema = mongoose.Schema({
  name : {
    type: String,
    required : true
  },
  genre : {
    type: String,
    required : true
  },
  author : {
    type: String,
    required : true
  },
  publisher : {
    type: String,
    required : true
  },
  description : {
    type: String,
  },
   pages : {
    type: String,
  },
  image_url : {
    type: String
  },

  buy_url : {
    type: String
  },

  current_date: {
    type: Date,
    default: Date.now
  }
})

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit)
}

module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

// add a book
module.exports.addBook = function(book, callback){
  Book.create(book, callback)
}

// update a genre
module.exports.updateBook = function(id, book, options, callback){
  var query= {_id:id}
  var update = {
    name: book.name,
    genre:book.genre,
    author:book.author,
    publisher:book.publisher,
    description:book.description,
    pages:book.pages,
    image_url:book.image_url,
    buy_url:book.buy_url     
  }
  Book.findOneAndUpdate(query, update, options, callback)
}

// delete a book
module.exports.deleteBook = function(id, callback){
  var query= {_id:id}
  Book.remove(query, callback)
}