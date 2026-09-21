# NestJS CRUD Demo

Simple User CRUD API created for learning Git, GitHub and CI/CD.

## Requirements

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Run

```bash
npm run start:dev
```

Application:

```text
http://localhost:3000
```

## APIs

### Get all users

```http
GET /users
```

### Get one user

```http
GET /users/1
```

### Create user

```http
POST /users
Content-Type: application/json

{
  "name": "Thamizh",
  "email": "thamizh@example.com"
}
```

### Update user

```http
PATCH /users/1
Content-Type: application/json

{
  "name": "Thamizh Kumar"
}
```

### Delete user

```http
DELETE /users/1
```

## Build

```bash
npm run build
npm run start:prod
```

The data is stored in memory, so it resets when the application restarts.
