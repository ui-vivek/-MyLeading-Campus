# Todo Application

This is a simple Todo application built using Node.js, Express.js, Sequelize and MySQL.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- MySQL (version 5.7 or later)

### Installation

1. Clone this repository:
git clone https://github.com-----------

2. Navigate to the project directory:
cd todo-app

3. Install the dependencies:
npm install


4. Set up the MySQL database:

   - Create a new database named `todo_db`.
   - Create a new user with access to the `todo_db` database.
   - Update the `config.json` file in the `config` directory with the correct database credentials.

5. Start the server:
npm start


The server should now be running on `http://localhost:5000/todo`.

## API Documentation

### Create a new Todo

- URL: `/todo`
- Method: `POST`
- Request Body: `{ "title": "string", "description": "string", "completed": "boolean" }`
- Response Body: `{ "id": "number", "title": "string", "description": "string", "completed": "boolean", "createdAt": "string", "updatedAt": "string" }`

### Update an existing Todo

- URL: `/todo/:todoId`
- Method: `PUT`
- Request Body: `{ "title": "string", "description": "string", "completed": "boolean" }`
- Response Body: `{ "id": "number", "title": "string", "description": "string", "completed": "boolean", "createdAt": "string", "updatedAt": "string" }`

### Get all Todos

- URL: `/todo`
- Method: `GET`
- Response Body: `[{ "id": "number", "title": "string", "description": "string", "completed": "boolean", "createdAt": "string", "updatedAt": "string" }]`

### Get a Todo by Id

- URL: `/todo/:todoId`
- Method: `GET`
- Response Body: `{ "id": "number", "title": "string", "description": "string", "completed": "boolean", "createdAt": "string", "updatedAt": "string" }`

### Delete a Todo by Id

- URL: `/todo/:todoId`
- Method: `DELETE`

## Built With

- Node.js
- Express.js
- Sequelize
- MySQL

## Authors

- John Doe

## License

This project is licensed under the MIT License - see the LICENSE file for details.







