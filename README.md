# Expense Tracker

A full-stack web application for managing and analysing personal expenses. The application provides user authentication, expense CRUD operations, filtering, sorting, searching, and dashboard visualisations.

## Features

### User Management

* User registration
* User login and logout
* Session-based authentication
* Password hashing
* Protected routes

### Expense Management

* Create expenses
* View expenses
* Update expenses
* Delete expenses
* Per-user expense ownership

### Expense Organisation

* Search expenses
* Filter by category
* Sort expenses
* Dashboard summary information
* Spending breakdown by category
* Monthly spending trends

---

## Technology Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Frontend         | React                          |
| Build Tool       | Vite                           |
| Styling          | Tailwind CSS + CSS             |
| Routing          | React Router                   |
| Charts           | Recharts                       |
| Frontend Testing | Vitest + React Testing Library |
| Backend          | Node.js + Express              |
| Database         | PostgreSQL                     |
| Authentication   | express-session                |
| Password Hashing | bcrypt                         |
| Containerisation | Docker + Docker Compose        |
| CI               | GitHub Actions                 |

---

## Project Architecture

### Frontend

* React-based single-page application
* React Router for navigation
* Responsive UI
* Form validation
* Loading states
* Toast notifications
* Confirmation modals
* Charts using Recharts

### Backend

* Node.js
* Express
* PostgreSQL
* REST APIs
* Session-based authentication
* Request validation
* Error handling
* Password hashing with bcrypt

### Testing

The frontend includes automated tests using:

* Vitest
* React Testing Library
* jsdom

Tests currently partially cover components and utilities such as:

* Buttons
* Confirmation modal
* Expense form
* Summary cards
* Analytics utilities
* Validators

---

## Running the Application

### Prerequisites

Install:

* [Docker](https://www.docker.com/)
* Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/mosessswk/expense-tracker
cd expense-tracker
```

### 2. Configure environment variables

Copy the root and backend environment templates:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

The root `.env` contains the PostgreSQL configuration used by Docker Compose:

```env
POSTGRES_DB=db_name
POSTGRES_USER=db_username
POSTGRES_PASSWORD=db_password
```

The backend also has its own environment configuration `backend/.env` for backend-specific configuration:

```env
DB_HOST=database
DB_PORT=5432
PORT=3000
SESSION_SECRET="secret"
```

> **Warning:** Do not commit `.env` files containing real credentials.

### 3. Start the application

```bash
docker compose up --build
```

Docker Compose starts three services:

```text
Frontend    →  http://localhost:5173
Backend     →  http://localhost:3000
PostgreSQL  →  localhost:5432
```

The frontend container is configured to serve the production Vite build through its web server.

### 4. Stop the application

```bash
docker compose down
```

To also remove the PostgreSQL volume for initialising the database from scratch:

```bash
docker compose down -v
```

> **Warning:** removing the volume deletes the all PostgreSQL data stored in the Docker volume.

Other deployment-specific instructions are documented separately in:

```text
DEPLOYMENT.md
```

Refer to `DEPLOYMENT.md` for the deployment configuration and production-related setup.

---

## Demonstration

https://github.com/user-attachments/assets/f486da8b-cb8d-44af-92aa-e21d78f911a2

### Sample Users :
* `user1` — `password1` (without sample expenses)
* `user2` — `password2` (with sample expenses)

---

## Known Limitations / Current State

* Automated tests have not yet been implemented in the backend and in some places in the frontend.
* The database seed file currently contains sample data.
* Tailwind CSS is only partially implemented across the frontend.

---
