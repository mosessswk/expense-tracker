# Deployment Guide

## Overview

This document describes how to deploy the Expense Tracker application.

The application consists of:
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Containerisation: Docker Compose

---

## Prerequisites

Ensure the following software is installed:

* Docker Desktop
* Docker Compose
*  Git

Verify installation:

```bash
docker --version
docker compose version
git --version
```

---

## Clone the Repository

```bash
git clone https://github.com/mosessswk/expense-tracker
cd expense-tracker
```

---

## Environment Variables

Create the required environment files.

### Root

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

### Backend

Create:

```
backend/.env
```

Example:

```env
DB_HOST=database
DB_PORT=5432
PORT=3000
SESSION_SECRET="secret"
```

---

### Frontend

(currently not required)

---

## Build the Application

Run:

```bash
docker compose build
```

---

## Start the Application

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

## Verify Deployment

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

## Stopping the Application

```bash
docker compose down
```

---

## Updating the Application

Pull the latest changes:

```bash
git pull
```

Rebuild:

```bash
docker compose up --build -d
```

---

# Database

PostgreSQL is automatically initialised through the files mounted from:

```text
backend/database/
```

The files are executed by PostgreSQL's Docker entrypoint when the database volume is created.

## Initialisation

The PostgreSQL container automatically runs:

```
01_schema.sql
02_seed.sql
```

during first startup.

If deploying from scratch, no additional setup is required.

If rebuilding an existing database:

```bash
docker compose down -v
docker compose up -d
```

---

## Schema

`01_schema.sql` creates the application's database tables, including:

* `users`
* `expenses`

Expenses are associated with users through `owner_id`.

The database also enforces:

* Primary keys
* Unique usernames
* Foreign-key relationships

## Seed Data

`02_seed.sql` inserts sample users and expenses :

* `user1` — `password1` (without sample expenses)
* `user2` — `password2` (with sample expenses)

The seed file is only executed when PostgreSQL initialises a **new database volume**. Therefore, changing the seed file will not automatically change an existing database.

To re-run the initialisation scripts:

```bash
docker compose down -v
docker compose up --build
```

---

# Testing

Run the frontend test suite with:

```bash
cd frontend
npm test
```

The backend currently does not have an implemented automated test suite.

---

# CI

The repository includes GitHub Actions workflows under:

```text
.github/workflows/
```

The GitHub Actions CI workflow runs frontend tests and builds, validates the Docker Compose configuration, and builds and starts the application containers.

Environment-specific values should be supplied through GitHub Actions secrets/environment variables rather than committing real `.env` files to the repository.

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
