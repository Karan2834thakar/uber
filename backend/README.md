# User Registration Endpoint

## POST /users/register

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long if provided.
- `email` (string, required): The user's email address. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The user's password. Must be at least 6 characters long.

### Response
- `201 Created`: The user was successfully registered.
  - Body: A JSON object containing the authentication token and user details.
- `400 Bad Request`: The request was invalid or missing required fields.
  - Body: A JSON object containing the validation errors.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
