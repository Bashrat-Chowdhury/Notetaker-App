// Imported Express.js
const express = require("express");

// Imported built-in Node.js package 'path'
const path = require("path");

// Initialized an instance of Express.js
const app = express();

// Specified on which port the Express.js server will run
const PORT = 3001;

// Middleware added
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//route to send inital note taking page for /
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

//route for /notes to send notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
