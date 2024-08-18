# Sports Facility Booking Management Platform

Backend for a sports facility booking platform.

### Live Deployment Link (Server)
https://sports-facility-backend-ecru.vercel.app/ 

### GitHub Repository Links (Server)
https://github.com/hasibferdous/sports_Facility_Booking_Platform

## Technologies used:

- TypeScript
- Node.js
- Express.js
- Mongoose for MongoDB
- Zod
- JWT

## Features:
- User can Sign Up and Login using user's email and password and other information.
- Admin can create any sports facility which contain sports's name, description, pricePerHour, location.
- Admin can update any sports facility related information.
- Users can check the availability of sports facilities for a specific date.
- Users can reserve/book sports facilities by selecting the date, start time, and end time. The system then calculates the payable amount based on the booking duration.
- Admins have access to view all bookings, whereas users can only view their own bookings.
- Users can cancel their bookings if needed.
- Middleware is used to protect routes, ensuring that only authenticated users and admins have access to their designated areas.
- Zod validation, JWT-based authentication is implemented to secure routes and ensure that only authorized users and admins can access their respective areas.
- Error handling provides appropriate responses and messages for validation errors, duplicate entries, and routes that are not found.


**_Setup Instructions_**
------------------------
- First, clone the repository to your local machine using the following command: **_ git clone https://github.com/hasibferdous/sports_Facility_Booking_Platform.git _**

- Navigate to the project directory: **_ cd sports_Facility_Booking_Platform _**

- Install the necessary dependencies by running: **_ npm install _**

- Create an **_ .env _** file in the root folder of the project

- Open the newly created **_ .env _** file and add the following codes. \*\*\*

- - PORT=your_port_number
- - DATABASE_URL=your_mongodb_url
- - BCRYPT_SALT_ROUNDS=any_integer_number
- - JWT_ACCESS_SECRET=your_jwt_secret
- - JWT_REFRESH_SECRET=your_jwt_secret
- - JWT_ACCESS_EXPIRES_IN=1d
- - JWT_REFRESH_EXPIRES_IN=365d

- Now, start the application by running: **_ npm run start:dev _**


## **API Endpoints**
## **User Sign Up**

- Route: POST /api/auth/signup

- Request Body:
  {
  "name": "Web Enthusiast",
  "email": "web@enthusiast.com",
  "password": "securepassword123",
  "phone": "01700000000",
  "role": "user",
  "address": "Apartment 5B, Green Valley, Dhanmondi, Dhaka"
  }

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
  "name": "Web Enthusiast",
  "email": "web@enthusiast.com",
  "role": "user",
  "phone": "01700000000",
  "address": "Apartment 5B, Green Valley, Dhanmondi, Dhaka",
  "\_id": "66be68a53660ca5dbc239a94",
  "\_\_v": 0
  }
  }

## **User Login**

- Route: POST /api/auth/login

- Request Body:
  {
  "email": "web@enthusiast.com",
  "password": "securepassword123"
  }

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYkBlbnRodXNpYXN0LmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIzNzU0ODIzLCJleHAiOjE3MjM4NDEyMjN9.bQD2FV-a5b7m6RJZGuiK5EAzhaN78t7AWT0lQjJceJg",
  "data": {
  "\_id": "66be68a53660ca5dbc239a94",
  "name": "Web Enthusiast",
  "email": "web@enthusiast.com",
  "role": "user",
  "phone": "01700000000",
  "address": "Apartment 5B, Green Valley, Dhanmondi, Dhaka",
  "\_\_v": 0
  }
  }

## **Create a Facility (Admin Only)**

- Route: POST /api/facility

- Headers:

- Authorization: Bearer JWT_TOKEN

- {
"name": "Tennis Court",
"description": "Outdoor tennis court with synthetic surface.",
"pricePerHour": 30,
"location": "456 Sports Ave, Springfield"
}

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Facility added successfully",
  "data": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Tennis Court",
  "description": "Outdoor tennis court with synthetic surface.",
  "pricePerHour": 30,
  "location": "456 Sports Ave, Springfield",
  "isDeleted": false
  }
  }

## **Update a Facility (Admin Only)**

- Route: PUT /api/facility/:id

- Headers:
- Authorization: Bearer JWT_TOKEN
- {
  "name": "Updated Tennis Court",
  "description": "Updated outdoor tennis court with synthetic surface.",
  "pricePerHour": 35,
  "location": "789 Sports Ave, Springfield"
  }

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Facility updated successfully",
  "data": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Updated Tennis Court",
  "description": "Updated outdoor tennis court with synthetic surface.",
  "pricePerHour": 35,
  "location": "789 Sports Ave, Springfield",
  "isDeleted": false
  }
  }

## **Delete a Facility - Soft Delete (Admin Only)**

- Route: DELETE /api/facility/:id

- Headers:
- Authorization: Bearer JWT_TOKEN

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Facility deleted successfully",
  "data": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Updated Tennis Court",
  "description": "Updated outdoor tennis court with synthetic surface.",
  "pricePerHour": 35,
  "location": "789 Sports Ave, Springfield",
  "isDeleted": true
  }
  }

## **Get All Facilities**

- Route: GET /api/facility

- Response:
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

## **Check Availability**

- Route: GET /api/check-availability

- Example Request: GET /api/check-availability?date=2024-06-15

- Example Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Availability checked successfully",
  "data": [
  {
  "startTime": "08:00",
  "endTime": "10:00"
  },
  {
  "startTime": "14:00",
  "endTime": "16:00"
  }
  ]
  }

## **Create a Booking (User Only)**

- Route: POST /api/bookings

- Headers:
- Authorization: Bearer JWT_TOKEN
- {
  "facility": "60d9c4e4f3b4b544b8b8d1c5",
  "date": "2024-06-15",
  "startTime": "10:00",
  "endTime": "13:00"
  }

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Booking created successfully",
  "data": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c6",
  "facility": "60d9c4e4f3b4b544b8b8d1c5",
  "date": "2024-06-15",
  "startTime": "10:00",
  "endTime": "13:00",
  "user": "60d9c4e4f3b4b544b8b8d1c4",
  "payableAmount": 90,
  "isBooked": "confirmed"
  }
  }

- If the facility is unavailable during the requested time slot, an error response is returned.

## **View All Bookings (Admin Only)**

- Route: GET /api/bookings

- Headers:
- Authorization: Bearer JWT_TOKEN

- Response:
  {
  "success": true,
  "statusCode": 200,
  "message": "Bookings retrieved successfully",
  "data": [
  {
  "_id": "60d9c4e4f3b4b544b8b8d1c6",
  "facility": {
  "_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Tennis Court",
  "description": "Outdoor tennis court with professional-grade surface.",
  "pricePerHour": 30,
  "location": "123 Main Street",
  "isDeleted": false
  },
  "date": "2024-06-15",
  "startTime": "10:00",
  "endTime": "13:00",
  "user": {
  "_id": "60d9c4e4f3b4b544b8b8d1c4",
  "name": "Programming Hero",
  "email": "programming.hero@example.com",
  "phone": "+1234567890",
  "role": "user",
  "address": "456 Elm Street"
  },
  "payableAmount": 90,
  "isBooked": " confirmed"
  }
  ]
  }

## **View Bookings by User (User Only)**

- Route: GET /api/bookings/user

- Headers:
- Authorization: Bearer JWT_TOKEN
- {
  "success": true,
  "statusCode": 200,
  "message": "Bookings retrieved successfully",
  "data": [
  {
  "_id": "60d9c4e4f3b4b544b8b8d1c6",
  "facility": {
  "_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Tennis Court",
  "description": "Outdoor tennis court with professional-grade surface.",
  "pricePerHour": 30,
  "location": "123 Main Street",
  "isDeleted": false
  },
  "date": "2024-06-15",
  "startTime": "10:00",
  "endTime": "13:00",
  "user": "60d9c4e4f3b4b544b8b8d1c4",
  "payableAmount": 90,
  "isBooked": " confirmed"
  }
  ]
  }

## **Cancel a Booking (User Only)**

- Route: DELETE /api/bookings/:id

- Headers:
- Authorization: Bearer JWT_TOKEN
- {
  "success": true,
  "statusCode": 200,
  "message": "Booking cancelled successfully",
  "data": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c6",
  "facility": {
  "\_id": "60d9c4e4f3b4b544b8b8d1c5",
  "name": "Tennis Court",
  "description": "Outdoor tennis court with professional-grade surface.",
  "pricePerHour": 30,
  "location": "123 Main Street",
  "isDeleted": false
  },
  "date": "2024-06-15",
  "startTime": "10:00",
  "endTime": "13:00",
  "user": "60d9c4e4f3b4b544b8b8d1c4",
  "payableAmount": 90,
  "isBooked": "canceled"
  }
  }

## **No Data Found**

- When retrieving data, if the database collection is empty or no matching data is found, return the message: "No data found."

- {
"success": false,
"statusCode": 404,
"message": "No Data Found",
"data":[]
}

## **Error Handling**

- Implementing proper error handling throughout the application. Using global error handling middleware to catch and handle errors, providing appropriate error responses with error messages.

- Sample Error Response:

  {
  "success": false,
  "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }",
  "errorMessages": [
  {
  "path": "",
  "message": "E11000 duplicate key error collection: project index: email_1 dup key: { email: \\"user2@gmail.com\\" }"
  }
  ],
  "stack": "MongoServerError: E11000 duplicate key error collection: project index: email_1 dup key: { email: \\"user2@gmail.com\\" }\\n at H:\\\\next-level-development\\\\project-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\operations\\\\insert.ts:85:25\\n at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\cmap\\\\connection_pool.ts:574:11\\n at H:\\\\next-level-development\\\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
  }

## **Not Found Route**

- Implementing a global "Not Found" handler for unmatched routes. When a route is not found, it responds with a generic message: "Not Found.”

- {
"success": false,
"statusCode": 404,
"message": "Not Found",
}

## **Authentication Middleware**

- Implementing an Authentication Middleware to authenticate your application. Ensures that only user and admin can access their own accessible routes.

- {
"success": false,
"statusCode": 401,
"message": "You have no access to this route",
}

## **Zod Validation**

- The API employs Zod for input validation, ensuring data consistency. When validation fails, a 400 Bad Request status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.


### By following these steps and utilizing the provided endpoints, you can effectively manage users, facilities, and bookings within the sports facility booking platform.

## HAVE A GOOD DAY !
