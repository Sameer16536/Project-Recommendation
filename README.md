
---

# Project Recommendation Website

This project is a full-stack web application built with React, TypeScript, Tailwind CSS, Node.js, Express, Prisma, and PostgreSQL. It includes user authentication, project management, admin functionalities, and interactive project guides.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up the Backend](#setting-up-the-backend)
  - [Setting Up the Frontend](#setting-up-the-frontend)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a web application that recommends projects based on user-selected levels (beginner, intermediate, advanced). It allows users to sign up, log in, view recommended projects, manage their profile, and contact the admin. Admins can manage users, add projects, and view project guides.

## Features

- **User Authentication**:
  - Sign up, log in, and log out functionality.
  - Secure password hashing and token-based authentication.

- **Project Recommendation**:
  - Select project difficulty level (beginner, intermediate, advanced).
  - View recommended projects matching the selected level.

- **User Dashboard**:
  - Display user-initiated projects with progress bars based on completion data.

- **Admin Panel**:
  - View list of users and their projects.
  - Add new projects including images, descriptions, prompts, and answers.
  - Delete users.

- **Project Guides**:
  - Interactive guides with ChatGPT prompts and section completion tracking.
  - Progress bar updates based on completed sections.

- **Responsive Design**:
  - Mobile-friendly layout using Tailwind CSS.

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - React Router
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - Prisma ORM
  - PostgreSQL
  - JWT for authentication
  - Multer for file uploads

## Getting Started

### Prerequisites

Before starting, make sure you have installed:

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd project-recommendation
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   # Install backend dependencies
   cd project-recommendation-backend
   npm install

   # Install frontend dependencies
   cd ../project-recommendation-frontend
   npm install
   ```

### Setting Up the Backend

1. Set up the PostgreSQL database and create a `.env` file in `project-recommendation-backend` directory:

   ```bash
   DATABASE_URL=your_postgresql_database_url
   PORT=4000
   ```

2. Apply migrations and seed data (if any) using Prisma:

   ```bash
   npx prisma migrate dev
   npx prisma db seed --preview-feature
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

### Setting Up the Frontend

1. Ensure the backend server is running.

2. In `project-recommendation-frontend`, create a `.env` file:

   ```bash
   REACT_APP_API_URL=http://localhost:4000
   ```

   Replace `http://localhost:4000` with your backend server URL if different.

3. Start the frontend development server:

   ```bash
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000` to view the application.
- Sign up as a new user or log in with existing credentials.
- Navigate through different pages using the navigation links.
- Admins can access the admin panel (`/admin`) to manage users and add projects.

## API Endpoints

- **Authentication**:
  - `POST /auth/login`: User login.
  - `POST /auth/signup`: User signup.

- **Projects**:
  - `GET /projects`: Fetch recommended projects.
  - `POST /admin/projects`: Add a new project.

- **Users**:
  - `GET /admin/users`: Fetch all users.
  - `DELETE /admin/users/:id`: Delete a user by ID.

- **Progress**:
  - Endpoint for tracking project completion progress.

## Folder Structure

```
project-recommendation-backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│   ├── server.ts
│   └── ...
└── ...

project-recommendation-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
└── ...
```

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.


---

