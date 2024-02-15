const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
