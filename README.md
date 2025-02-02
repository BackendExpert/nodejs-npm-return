# nodejs-return-status

- A simple and easy-to-use utility for returning standard HTTP responses in a Node.js application, designed for use in a MERN stack backend.

## Installation

```bash

    npm nodejs-return-status

```

## Usage

- This package provides functions to return standard success and error responses in your Express API.

## Importing the Functions

You can import the functions in your project like this:

```js

const { ReturnSuccessMsg, ReturnResourceExists } = require('nodejs-return-status');

```

## Functions

### ReturnSuccess(res)

- Returns only success response with HTTP status code `200`

<b>Parameters</b>

- `res`: The response object from Express.


### ReturnSuccessMsg(res, msg)

- Returns a success response with a custom message and a `200` OK status code.

<b>Parameters</b>

- `res`: The response object from Express.
- `msg`: Message that you need to send

### ReturnResourceExists(res, Error)

- Returns an error response with a `409` Conflict status code, indicating that the resource already exists.

<b>Parameters</b>

- `res`: The response object from Express.
- `Error`: Error Message that you need to send


### ReturnInternalServerError(res, Error)

- Returns an error response with a `500` Internal Server Error status code.

<b>Parameters</b>

- `res`: The response object from Express.
- `Error`: Error Message that you need to send


## Example Usage

```js

const express = require('express');
const { ReturnSuccessMsg, ReturnResourceExists } = require('nodejs-return-status');

const app = express();

// Example Route to register a user
app.post('/register', (req, res) => {
    const { email } = req.body;

    // Simulate checking if user already exists
    const userExists = email === 'existinguser@example.com';

    if (userExists) {
        return ReturnResourceExists(res); // Resource already exists
    }

    return ReturnSuccessMsg(res, "User Registered");
});

app.listen(3000, () => console.log('Server running on port 3000'));


```
- <b>Status Codes and Responses</b>

- `200 OK`: Returned by ReturnSuccessMsg() to indicate successful operation.
- `409 Conflict`: Returned by ReturnResourceExists() to indicate a conflict (e.g., when a resource already exists).


## License

This package is licensed under the [MIT License](https://github.com/BackendExpert/nodejs-npm-return/blob/master/LICENSE)


## Contributing

1. Fork the repository.
2. Create a new branch 
3. Commit your changes 
4. Push to the branch 
5. Create a new Pull Request.