# 🚀 PathFinder - Intelligent Route Optimization Platform



A Production-Ready Full Stack Route Optimization Platform built with React, Node.js, Express.js, PostgreSQL, Docker, Railway, and Vercel.

The application enables users to securely register, authenticate, calculate the shortest route using Dijkstra's Algorithm, and maintain route history with a responsive and secure user experience.


---

## 🌐 Live Demo

### 🚀 Frontend

https://pathfinder-frontend-snowy.vercel.app

### ⚙️ Backend API

https://pathfinder-backend-production-2606.up.railway.app

---

## 📌 Project Overview

PathFinder is a production-ready Full Stack Route Optimization Platform designed to demonstrate modern backend development, secure authentication, database management, API development, testing, deployment, and algorithm implementation.

The application allows authenticated users to calculate the shortest route between two locations using **Dijkstra's Shortest Path Algorithm** while securely storing their route history in PostgreSQL.

This project was built to simulate a real-world backend architecture and follows industry best practices including authentication, validation, testing, Docker containerization, CI automation, cloud deployment, and secure API design.

---

# 🎯 Project Goals

The primary objectives of this project were:

- Build a scalable REST API
- Implement secure JWT Authentication
- Learn PostgreSQL integration
- Apply Dijkstra's Shortest Path Algorithm
- Store and retrieve user-specific route history
- Implement production-grade middleware
- Write automated tests
- Containerize the backend using Docker
- Deploy backend to Railway
- Deploy frontend to Vercel
- Practice CI using GitHub Actions
- Follow production-ready backend architecture

---

# ✨ Features

## 👤 User Authentication

- User Registration
- Secure Login
- JWT Token Generation
- Protected Routes
- Password Hashing using bcrypt
- Token Verification Middleware
- Authentication Error Handling

---

## 🛣 Route Optimization

- Shortest Route Calculation
- Dijkstra's Algorithm
- Distance Calculation
- Efficient Graph Traversal
- Fast Route Lookup

---

## 📜 Route History

- Save Route History
- Retrieve User History
- Persistent PostgreSQL Storage
- User-specific Route Records

---

## 🔒 Security Features

- JWT Authentication
- Password Encryption using bcrypt
- Helmet Security Headers
- Express Rate Limiting
- CORS Protection
- Input Validation
- Global Error Handling
- Consistent API Responses

---

## 🧪 Testing

- Unit Testing using Jest
- API Testing using Supertest
- Authentication Endpoint Testing
- Dijkstra Algorithm Testing
- Express Application Testing

---

## ⚙️ DevOps & Deployment

- Dockerized Backend
- Docker Compose Support
- GitHub Actions (Continuous Integration)
- Railway Cloud Deployment
- Vercel Frontend Deployment
- Environment Variable Management

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS3

---

## Backend

- Node.js
- Express.js

---

## Database

- PostgreSQL

---

## Authentication

- JSON Web Token (JWT)
- bcryptjs

---

## Validation

- express-validator

---

## Security

- Helmet
- CORS
- Express Rate Limit

---

## Logging

- Morgan

---

## Testing

- Jest
- Supertest

---

## DevOps

- Docker
- Docker Compose
- GitHub Actions

---

## Cloud Deployment

### Backend

- Railway

### Frontend

- Vercel

---

# 📂 Project Structure

```

PathFinder

├── frontend/

│ ├── src/

│ ├── pages/

│ ├── services/

│ ├── components/

│ ├── App.jsx

│ └── main.jsx

│

├── backend/

│ ├── src/

│ │ ├── controllers/

│ │ ├── middleware/

│ │ ├── routes/

│ │ ├── services/

│ │ ├── db/

│ │ ├── algorithms/

│ │ ├── **tests**/

│ │ └── validators/

│ │

│ ├── app.js

│ ├── server.js

│ ├── Dockerfile

│ ├── docker-compose.yml

│ ├── .dockerignore

│ └── package.json

```

---

# 🚀 Live Deployment

| Service | Platform | Status |
|----------|----------|--------|
| Frontend | Vercel | ✅ Live |
| Backend | Railway | ✅ Live |
| Database | PostgreSQL (Railway) | ✅ Connected |

---

# 📸 Project Screenshots

> Screenshots will be added soon.

- Home Page
- Register Page
- Login Page
- Route Calculation
- Route History
- Mobile View

---