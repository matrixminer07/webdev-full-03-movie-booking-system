# Movie Booking System - Backend

Express.js backend server for the movie booking system with MongoDB integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/movie-booking
PORT=5000
```

3. Seed the database with sample movies:
```bash
node seed.js
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Movies
- `GET /api/movies` - Get all movies
- `POST /api/movies` - Create a new movie
- `GET /api/movies/:id` - Get a specific movie

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/:id` - Get booking details

### Seats
- `GET /api/seats/movie/:movieId` - Get seats for a movie
- `POST /api/seats/book` - Book a seat
- `POST /api/seats/initialize/:movieId` - Initialize seats for a movie

## Requirements
- Node.js
- MongoDB
