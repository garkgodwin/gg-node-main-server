const express = require("express"); // Import Express
const morgan = require("morgan"); // For logging
const app = express(); // Create an Express app

const PORT = 3000; // Port the server will listen on

// Middleware to parse JSON requests (optional, for APIs)
app.use(express.json());

app.use(morgan("dev")); // Logs every request to the console

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a response to the client
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
