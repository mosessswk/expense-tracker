# Deployment Guide

## Overview

This document describes how to deploy the Expense Tracker application.

The application consists of:
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Containerisation: Docker Compose

---

# Prerequisites

Ensure the following software is installed:

| Software | Version |
|----------|----------|
| Docker Desktop | Latest |
| Docker Compose | Latest |
| Git | Latest |

Verify installation:

```bash
docker --version
docker compose version
git --version
```

---

# Clone the Repository

```bash
git clone https://github.com/mosessswk/expense-tracker
cd expense-tracker
```

---

# Environment Variables

Create the required environment files.

## Root

Create:

```
/.env
```

Example:

```env
POSTGRES_DB=db_name
POSTGRES_USER=db_username
POSTGRES_PASSWORD=db_password
```

---

## Backend

Create:

```
backend/.env
```

Example:

```env
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

---

## Frontend

(currently not required)

---

# Build the Application

Run:

```bash
docker compose build
```

---

# Start the Application

```bash
docker compose up -d
```

Expected containers:

- frontend
- backend
- database

Check status:

```bash
docker compose ps
```

---

# Database Initialisation

The PostgreSQL container automatically runs:

```
init.sql
```

during first startup.

If deploying from scratch, no additional setup is required.

If rebuilding an existing database:

```bash
docker compose down -v
docker compose up -d
```

---

# Verify Deployment

Open:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:3000
```

---

# Stopping the Application

```bash
docker compose down
```

---

# Updating the Application

Pull the latest changes:

```bash
git pull
```

Rebuild:

```bash
docker compose up --build -d
```

---

# Common Issues

## Port already in use

Stop the conflicting application or modify the exposed port in `compose.yml`.

---

## Database authentication failed

Ensure:

- DB_USER matches the PostgreSQL user
- DB_PASSWORD matches the configured password
- Existing Docker volumes are removed if credentials changed

```bash
docker compose down -v
```

---

## Backend cannot connect to database

Check:

```bash
docker compose logs backend
docker compose logs database
```

Verify:

- database container is running
- database hostname matches `compose.yml`
- environment variables are correct

---

## Environment variables not found

Ensure both files exist:

```
/.env
backend/.env
```

---

# Production Considerations

Before deploying to production:

- Use strong passwords
- Enable HTTPS
- Restrict database access
- Regularly back up the PostgreSQL database
- Do not commit `.env` files to Git

---

# Deployment Architecture

```
Browser
    │
    ▼
Frontend (React/Vite)
    │
    ▼
REST API
    │
    ▼
Backend (Express)
    │
    ▼
PostgreSQL Driver
    │
    ▼
PostgreSQL Database
```