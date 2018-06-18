var mongoose = require('mongoose')

var genreSchema = mongoose.Schema({
  name : {
    type: String,
    required : true
  },

  current_date: {
    type: Date,
    default: Date.now
  }
})

var Genre = module.exports = mongoose.model('Genre', genreSchema)

// get all the genre
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit)
}

// add a genre
module.exports.addGenre = function(genre, callback){
  Genre.create(genre, callback)
}