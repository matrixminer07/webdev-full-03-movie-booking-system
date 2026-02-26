const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('./models/Movie');

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const movies = [
      {
        title: 'The Matrix Reloaded',
        description: 'Neo and his allies race against time before the machines discover the city of Zion and destroy it.',
        releaseDate: new Date('1999-01-01'),
        price: 250,
        duration: 136,
        genre: 'Sci-Fi',
        posterUrl: 'https://via.placeholder.com/200x300?text=Matrix',
        showtime: new Date(Date.now() + 86400000),
        theater: 'PVR Cinemas',
        totalSeats: 100,
      },
      {
        title: 'Inception',
        description: 'A skilled thief who steals corporate secrets through dream-sharing technology.',
        releaseDate: new Date('2010-07-16'),
        price: 300,
        duration: 148,
        genre: 'Sci-Fi Thriller',
        posterUrl: 'https://via.placeholder.com/200x300?text=Inception',
        showtime: new Date(Date.now() + 172800000),
        theater: 'INOX',
        totalSeats: 100,
      },
      {
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.',
        releaseDate: new Date('2014-11-07'),
        price: 350,
        duration: 169,
        genre: 'Sci-Fi Drama',
        posterUrl: 'https://via.placeholder.com/200x300?text=Interstellar',
        showtime: new Date(Date.now() - 86400000),
        theater: 'Cinepolis',
        totalSeats: 100,
      },
      {
        title: 'The Dark Knight',
        description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos.',
        releaseDate: new Date('2008-07-18'),
        price: 280,
        duration: 152,
        genre: 'Action Thriller',
        posterUrl: 'https://via.placeholder.com/200x300?text=DarkKnight',
        showtime: new Date(Date.now() + 259200000),
        theater: 'PVR Cinemas',
        totalSeats: 100,
      },
      {
        title: 'Pulp Fiction',
        description: 'The lives of two mobsters, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine.',
        releaseDate: new Date('1994-10-14'),
        price: 200,
        duration: 154,
        genre: 'Crime Drama',
        posterUrl: 'https://via.placeholder.com/200x300?text=PulpFiction',
        showtime: new Date(Date.now() - 172800000),
        theater: 'INOX',
        totalSeats: 100,
      },
    ];

    await Movie.deleteMany({});
    await Movie.insertMany(movies);

    console.log('Database seeded successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.disconnect();
  }
}

seedDatabase();
