# Carrental-portal-
# 🚗 Car Rental Portal — PHP &amp; MySQL Based Web Application  A fully functional **Car Rental Portal** developed using **Core PHP**, **MySQL**, and **HTML/CSS**. It allows users to book cars, view listings, manage bookings, and admins to manage car inventory, bookings, and customers.
# 🚗 Car Rental Portal — PHP & MySQL Web App

A fully functional **Car Rental Portal** built with **Core PHP**, **MySQL**, and **HTML/CSS**—providing a complete experience for both users and admins to manage car bookings and listings.

---

##  Features

- **User Panel**  
  - Login / Logout  
  - Browse available cars  
  - View car details & pricing  
  - Book a car with pickup/drop info  
  - View booking history  
  - Post and view testimonials  
  - Profile update & password change

- **Admin Panel (Admin features implied via pages like `my-testimonials`, `post-testimonial`, etc.)**

---

##  Tech Stack

| Layer     | Tech Stack           |
|-----------|----------------------|
| Backend   | Core PHP             |
| Database  | MySQL                |
| Frontend  | HTML, CSS            |
| Server    | Apache (XAMPP/WAMP)  |

---
##  Project Structure

/
├── index.php
├── search.php
├── search‑carresult.php
├── car‑listing.php
├── vehical‑details.php
├── booking.php (if applicable)
├── my‑booking.php
├── my‑testimonials.php
├── post‑testimonial.php
├── profile.php
├── update‑password.php
├── logout.php
├── contact‑us.php
├── check_availability.php
├── includes/ (config files, utilities)
├── images/ (car images)
├── css/, js/ (styles, scripts)
├── carrentaldb.sql (database dump)
└── README.md

---

##  How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/rahu2112/Carrental-portal-.git
Import the Database

Use carrentaldb.sql (or SQL File in your repository) to set up the database schema and sample data via phpMyAdmin or CLI.

Configure Settings

Update database credentials in your config file (includes/config.php or similar).

Run the Application

Move the project folder under your web server’s root (e.g., htdocs for XAMPP).

Open in browser:

http://localhost/Carrental-portal-/
Future Enhancements
Integrate payment gateway (e.g., Razorpay, Stripe)

Implement search filters (price, location, car type)

Add user registration and session security (e.g., hashed passwords)

Include admin dashboard for car and booking management

Send email confirmations for bookings

Make UI responsive using Bootstrap or a modern framework


Developer Info
GitHub: rahu2112
Feel free to connect if you'd like collaboration or feature suggestions!


