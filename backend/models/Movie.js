const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  releaseDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: Number,
  genre: String,
  posterUrl: String,
  showtime: {
    type: Date,
    required: true,
  },
  theater: String,
  totalSeats: {
    type: Number,
    default: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
