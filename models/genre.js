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

module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit)
}