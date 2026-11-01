# MERN Estate

A real-estate listings app where users can sign in, post properties for rent or sale, and search listings with filters.

**Live:** https://mern-estate-s6le.onrender.com/ (free hosting - the first load can be slow)

## Features
- Sign up and sign in with email, or with **Google** (Firebase Auth)
- JWT authentication with protected routes
- Create, update and delete your own listings, with **image upload** (Firebase Storage)
- Search and filter listings (type, offer, parking, furnished, sort order)
- Profile page to manage your account and listings
- Redux Toolkit with redux-persist; Swiper image galleries

## Tech stack
React, Redux Toolkit, Tailwind CSS, Firebase · Node.js, Express · MongoDB, Mongoose · JWT

## Run it
Create `.env` in the project root:
```
MONGO=your_mongodb_connection_string
JWT_SECRET=any_long_random_string
```
and `client/.env`:
```
VITE_FIREBASE_API_KEY=your_firebase_key
```
```bash
npm install && npm install --prefix client
npm start                  # API (port 3000)
cd client && npm run dev   # React app
```
