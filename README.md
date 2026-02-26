# Full-Stack Movie Booking System

A complete React + Node.js + MongoDB movie booking system with intentional bugs for educational purposes.

## Project Structure

```
webdev-full-03-movie-booking-system/
├── backend/
│   ├── models/
│   │   ├── Movie.js
│   │   ├── Booking.js
│   │   └── Seat.js
│   ├── routes/
│   │   ├── movies.js
│   │   ├── bookings.js
│   │   └── seats.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieList.js
│   │   │   ├── MovieList.css
│   │   │   ├── SeatSelection.js
│   │   │   ├── SeatSelection.css
│   │   │   ├── Checkout.js
│   │   │   └── Checkout.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── ERRORS.md
└── .gitignore
```

## Getting Started

### Backend Setup
```bash
cd backend
npm install
node seed.js
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Issues

This system contains 5 intentional bugs. See `ERRORS.md` for the complete list without solutions.

1. Seat Selection UI Broken
2. Seat Not Marked as Taken After Booking
3. Price Calculation Doesn't Consider Ticket Count
4. Movies from Past Can Be Booked
5. API is Not Integrated on Checkout Page
