



Live Deployment Link (Server)

GitHub Repository Links (Server)

Project Overview Video. (A brief video providing an overview of the project.)




Programming Language: TypeScript
Web Framework: Express.js
ODM & Validation Library: Mongoose for MongoDB


Backend Development:

Node.js
Express.js
Mongoose
TypeScript



API Endpoints
User Routes
User Sign Up
Route: POST /api/auth/signup
Request Body:
{
  "name": "Programming Hero",
  "email": "web@programming-hero.com",
  "password": "programming-hero",
  "phone": "01322901105",
  "role": "admin", // or 'user'
  "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
}
Response:
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c4",
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "role": "admin",
    "phone": "01322901105",
    "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
  }
}
User Login
Route: POST /api/auth/login
Request Body:
{
  "email": "web@programming-hero.com",
  "password": "programming-hero"
}
Response:
{
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "token": "JWT_TOKEN",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c4",
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "role": "admin",
    "phone": "01322901105",
    "address": "Level-4, 34, Awal Centre, Ban Myeni, Dhaka"
  }
}
Create a Facility (Admin Only)
Route: POST /api/facility
Headers:
Authorization: Bearer JWT_TOKEN
{
  "name": "Tennis Court",
  "description": "Outdoor tennis court with synthetic surface.",
  "pricePerHour": 30,
  "location": "456 Sports Ave, Springfield"
}
{
  "success": true,
  "statusCode": 200,
  "message": "Facility added successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Tennis Court",
    "description": "Outdoor tennis court with synthetic surface.",
    "pricePerHour": 30,
    "location": "456 Sports Ave, Springfield",
    "isDeleted": false
  }
}
Update a Facility (Admin Only)
Route: PUT /api/facility/:id
Headers:
Authorization: Bearer JWT_TOKEN
{
  "name": "Updated Tennis Court",
  "description": "Updated outdoor tennis court with synthetic surface.",
  "pricePerHour": 35,
  "location": "789 Sports Ave, Springfield"
}
Response
{
  "success": true,
  "statusCode": 200,
  "message": "Facility updated successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Updated Tennis Court",
    "description": "Updated outdoor tennis court with synthetic surface.",
    "pricePerHour": 35,
    "location": "789 Sports Ave, Springfield",
    "isDeleted": false
  }
}
Delete a Facility - Soft Delete (Admin Only)
Route: DELETE /api/facility/:id
Headers:
      Authorization: Bearer JWT_TOKEN
Response:
{
  "success": true,
  "statusCode": 200,
  "message": "Facility deleted successfully",
  "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Updated Tennis Court",
      "description": "Updated outdoor tennis court with synthetic surface.",
      "pricePerHour": 35,
      "location": "789 Sports Ave, Springfield",
      "isDeleted": true
    }
}
6. Get All Facilities

Route: GET /api/facility
Response:
{
  "success": true,
  "statusCode": 200,
  "message": "Facilities retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Tennis Court",
      "description": "Outdoor tennis court with synthetic surface.",
      "pricePerHour": 30,
      "location": "456 Sports Ave, Springfield",
      "isDeleted": false
    }
  ]
}