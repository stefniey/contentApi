# User Dashboard with Mock API Integration

## Overview

This project implements a **User Dashboard** with **Mock API** integration. The mock API serves 500 user records from a **JSON file** (`db.json`), which can be used to simulate a user management system. This project focuses on setting up a RESTful API with Node.js and Express.js for handling **GET** and **POST** requests and simulates a real-world scenario for handling user data.

The API allows you to fetch user records, add new users, and easily integrate with any frontend or other services by consuming the provided endpoints.

## Key Features

- **Mock API Integration**: Serves 500 user records from `db.json`.
- **GET and POST Routes**: Allows for retrieving user data and adding new user records.
- **Simple Setup**: Provides a mock backend service that can be extended or integrated with any frontend or application.
- **Pagination**: Allows users to navigate through records with pagination support.
- **Responsive Data**: Designed to serve data for consumption by various frontend interfaces.

## Technology Stack

- **Node.js**: Backend runtime used to serve the API.
- **Express.js**: Web framework used to handle API routing and middleware.
- **Mock API**: User data is stored in `db.json` and served by the Express server.
- **JSON Server**: Simulates a RESTful API for CRUD operations.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [API Endpoints](#api-endpoints)
4. [Features in Detail](#features-in-detail)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure

Here’s an overview of the folder structure:

```
user-dashboard/
├── api/
│   ├── db.json                # Mock data for user records
├── routes.js/
    ├── users.js      
├── server.js                  # Starts the server and integrates the mock API
├── app.js                     # Application logic for setting up routes and middleware
└── package.json               # Project dependencies and scripts
```

## Getting Started

- **Clone the repository**:

  ```bash
  git clone https://github.com/stefniey/contentApi.git
  cd contentApi.
  ```

- **Install Dependencies**:

  Install the required packages using npm:

  ```bash
  npm install
  ```

- **Start the Server**:

  Start the server to run the mock API:

  ```bash
  npm start
  ```

- **Access the API**:

  The API will be available at `http://localhost:3000` by default.

## API Endpoints

Here are the key API endpoints available for interacting with the user data:

### 1. **GET /api/users**

- **Description**: Fetches a list of 500 mock user records from `db.json`.
- **Response Format**: JSON
- **Example Response**:

  ```json
  [
    {
      "id": 1,
      "personalInfo": {
        "fullName": "Mike Ola",
        "userName": "Mike",
        "phoneNumber": "08023456789",
        "email": "Mike@gomake.com",
        "bvn": "12345678901",
        "maritalStatus": "Single",
        "children": 0,
        "typeOfResidence": "Apartment",
        "gender": "Male",
        "organisation": "gomake",
        "status": "Inactive",
        "dateJoined": "March 15, 2020 10:00 AM"
      },
      "educationAndEmployment": {
        "levelOfEducation": "B.Sc",
        "employmentStatus": "Employed",
        "sectorOfEmployment": "Tech",
        "durationOfEmployment": "2 years",
        "officeEmail": "john@lendsqr.com",
        "monthlyIncome": "₦300,000.00 - ₦400,000.00",
        "loanRepayment": "₦50,000"
      },
      "social": {
        "twitter": "mike.20",
        "facebook": "mike.22",
        "instagram": "adedeji"
      },
      "guarantor": {
        "fullNames": "Aunt Jane",
        "phoneNumber": "08012345679",
        "emails": "aunt.jane@example.com",
        "relationship": "Aunt"
      }
    }
  ]
  ```

### 2. **GET /api/users/:id**

- **Description**: Fetches a single user record by its unique ID from `db.json`.
- **Response Format**: JSON
- **Example Response**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "address": "123 Main Street, City, Country"
  }
  ```

### 3. **POST /api/users**

- **Description**: Adds a new user record to `db.json` (mocking a database write).
- **Request Body**: JSON with user details (name, email, address).
- **Example Request**:

  ```json
  {
    "name": "Alice Wonderland",
    "email": "alice@example.com",
    "address": "789 Oak Avenue, Wonderland"
  }
  ```

- **Response Format**: JSON (Newly created user data).

---

## Features in Detail

### 1. **Mock API Integration**
- The mock API serves user data from `db.json`, simulating a real backend service with mock data for development and testing.

### 2. **GET and POST Routes**
- **GET**: Fetch all users or a specific user by ID.
- **POST**: Allows adding new users to the mock database.

## Contributing

This is a personal project, but contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch for your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
