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