import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import Checkout from './components/Checkout';

function App() {
  const [currentPage, setCurrentPage] = useState('movies');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userId, setUserId] = useState('user123');

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage('seats');
  };

  const handleSelectSeats = (seats) => {
    setSelectedSeats(seats);
    setCurrentPage('checkout');
  };

  const handleBackToMovies = () => {
    setCurrentPage('movies');
    setSelectedMovie(null);
    setSelectedSeats([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Movie Booking System</h1>
      </header>
      
      {currentPage === 'movies' && (
        <MovieList onSelectMovie={handleSelectMovie} />
      )}
      
      {currentPage === 'seats' && selectedMovie && (
        <SeatSelection 
          movie={selectedMovie}
          onSelectSeats={handleSelectSeats}
          onBack={handleBackToMovies}
        />
      )}
      
      {currentPage === 'checkout' && selectedMovie && (
        <Checkout
          movie={selectedMovie}
          seats={selectedSeats}
          userId={userId}
          onBack={handleBackToMovies}
        />
      )}
    </div>
  );
}

export default App;
