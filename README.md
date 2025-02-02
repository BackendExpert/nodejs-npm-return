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

const { ReturnSuccessMsg, ReturnResourceExists } = require('nodejs-return-data');

```

## Functions

### ReturnSuccess(res)

- Returns only success response with HTTP status code `200`

<b>Parameters</b>

- `res`: The response object from Express.


### ReturnSuccessMsg(res, msg)

- Returns a success response with a custom message and a 200 OK status code.

<b>Parameters</b>

- `res`: The response object from Express.
- `msg`: The message to include in the response. (optional, default is "Resource Already Exists")