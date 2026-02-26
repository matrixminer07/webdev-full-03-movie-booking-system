# Movie Booking System - Identified Issues

## Issue 1: Seat Selection UI Broken
**Location:** `frontend/src/components/SeatSelection.css`

The seat layout is broken due to incorrect CSS grid configuration. The seats container uses a 5-column grid while the rows use a 21-column grid, causing misalignment and overlapping seats that are difficult to interact with properly.

---

## Issue 2: Seat Not Marked as Taken After Booking
**Location:** `backend/routes/seats.js` (POST `/book` endpoint)

When a user books a seat through the seat booking endpoint, the response returns success but the database record is never updated to mark `isBooked` as `true`. This means the same seat can appear as available to other users even after it has been booked.

---

## Issue 3: Price Calculation Doesn't Consider Ticket Count
**Location:** `backend/routes/bookings.js` (line with totalPrice calculation)

The total price calculation multiplies the movie price by 1 regardless of how many seats the user actually selects. If a user books 5 seats, they are still only charged for 1 seat. The calculation should multiply `movie.price` by the number of selected seats (length of seats array).

---

## Issue 4: Movies from Past Can Be Booked
**Location:** `backend/routes/movies.js` (GET `/` endpoint)

The GET movies endpoint returns all movies in the database without filtering by showtime. This includes movies with showtimes in the past, allowing users to attempt bookings for movies that have already been screened.

---

## Issue 5: API is Not Integrated on Checkout Page
**Location:** `frontend/src/components/Checkout.js` (handleConfirmBooking function)

The checkout page has no API integration for actually saving the booking. When the user confirms their booking, the application only displays a confirmation message locally without making any POST request to the backend `/api/bookings` endpoint. The booking data is never persisted to the database.

---
