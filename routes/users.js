import express from 'express';

import { createUser, getUsers, getUser, deleteUser, upDateUser} from '../controllers/users.js';
// Importing the express module and uuidv4 function for generating unique IDs

const router = express.Router();



// Sample route for user
// all routs are starting with /users
router.get('/', getUsers);



router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);


router.patch('/:id', upDateUser);
export default router;
// This code defines a simple Express router for handling user-related routes.
// It imports the express module, creates a router instance, and defines a GET route for '/users'.
// When a GET request is made to '/users', it responds with a message "Hello World from users page!".
// Finally, it exports the router instance for use in other parts of the application.
// This code is a simple Express.js route handler for a user-related endpoint.