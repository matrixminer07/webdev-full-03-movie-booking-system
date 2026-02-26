const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  seats: [
    {
      type: String,
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'confirmed',
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
