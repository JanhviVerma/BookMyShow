# BookMyShow Clone

This is a clone of the BookMyShow application, a platform for booking movie tickets, events, and other entertainment services. This project demonstrates a full-stack web application using modern web technologies.

![Screenshot from 2024-08-29 18-11-14](https://github.com/user-attachments/assets/d4d71ad8-8f38-49b6-98d1-3c84c1a82fd9)
![Screenshot from 2024-08-29 18-12-02](https://github.com/user-attachments/assets/8032722c-5d64-44bf-aa04-0b3115fbb49a)
![Screenshot from 2024-08-29 18-15-40](https://github.com/user-attachments/assets/0e4d87c3-72dc-4bf4-b54c-9b62ee3fe700)
![Screenshot from 2024-08-29 18-15-47](https://github.com/user-attachments/assets/5db94be6-5773-4924-a579-421af74605d7)



## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- 
## Features

- **User Authentication:** Secure user authentication and authorization.
- **Movie Browsing:** Browse through a wide range of movies and events.
- **Booking System:** Book tickets for movies and events.
- **Payment Integration:** Payment gateway integration for secure transactions.
- **Admin Panel:** Admin functionalities for managing movies, events, and bookings.
- **Responsive Design:** Fully responsive design for mobile and desktop views.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux
  - Tailwind CSS
  - Axios (for API calls)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for ORM)
  - JWT (JSON Web Tokens for authentication)
  - Bcrypt.js (for password hashing)

- **Other Tools:**
  - Git (Version Control)
  - Postman (API Testing)
  - Heroku (Deployment)

## Setup and Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (local or cloud-based)
- Git

### Installation Steps

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/JanhviVerma/BookMyShow.git
   cd BookMyShow
   ```

2. **Install Dependencies:**

   - For the backend:

     ```bash
     cd server
     npm install
     ```

   - For the frontend:

     ```bash
     cd client
     npm install
     ```

3. **Environment Variables:**

   Create a `.env` file in the `server` directory with the following keys:

   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

## Running the Project

### Backend (API Server)

- **Start the backend server:**

  ```bash
  cd server
  node index.js
  ```

- The backend server will run on `http://localhost:5000`.

### Frontend (React App)

- **Start the frontend server:**

  ```bash
  cd client
  npm start
  ```

- The frontend server will run on `http://localhost:3000`.

### Ports for Running Services

- **Admin Service:** Runs on port `5000` (default).
- **Partner Service:** Configure the partner service in the `.env` file if separate. Default can be `5001`.
- **Client Service:** Runs on port `3000` (default React app).

## Project Structure

```bash
BookMyShow/
├── client/               # Frontend code (React.js)
├── server/               # Backend code (Node.js, Express)
│   ├── controllers/      # Route controllers (business logic)
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   └── utils/            # Utility functions
└── README.md             # Project documentation
```

## API Documentation

The API documentation for this project can be accessed using Postman or any other API client by importing the provided Postman collection in the `server/docs/` directory.

### Authentication

- **Register User:** `POST /api/auth/register`
- **Login User:** `POST /api/auth/login`

### Movies

- **Get All Movies:** `GET /api/movies`
- **Get Movie by ID:** `GET /api/movies/:id`

### Bookings

- **Create Booking:** `POST /api/bookings`
- **Get User Bookings:** `GET /api/bookings/user/:userId`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive overview of your project, including setup instructions, running procedures, and API documentation.
