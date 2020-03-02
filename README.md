# API Documentation

## Backend Deployment

- <h3>baseUrl here</h3>

## Frameworks

- bcryptjs
- cloudinary
- cors
- datauri
- dotenv
- express
- helmet
- jsonwebtoken
- knex
- knex-cleaner
- multer
- sqlite3

## Routes

- ### Authentication

  **/api/auth**

  | Method | Endpoint  | Action                    | Required Fields                  |
  | :----- | :-------- | :------------------------ | :------------------------------- |
  | POST   | /register | registers a new user      | username, password, phone_number |
  | POST   | /login    | signs registered users in | username, password               |
