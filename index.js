import express from 'express';
import bodyParser from 'body-parser';


// Import routes
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/users', userRoutes);
// This code sets up an Express.js server that listens on a specified port (default is 5000).

// Sample route
app.get('/', (req, res) => res.send('Hello World!'));

/*
Example API request using Postman:

Method: GET
URL: http://localhost:3000/api/hello
Headers:
  Content-Type: application/json
Response:
  {
    "message": "Hello, world!"
  }
*/

// handle invalid routes
app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');});

    // This code sets up a global error handler for an Express.js application.
    // It logs the error stack to the console and sends a 500 status response with a message indicating that something went wrong.

app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));



