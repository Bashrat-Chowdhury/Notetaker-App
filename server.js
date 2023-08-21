// Imported Express.js
const express = require("express");
const api = require("./routes/index");

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
app.use("/api", api);

//route to send inital note taking page for /
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

//route for /notes to send notes page
app.get("/notes", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  } catch (error) {
    console.error("Error sending notes.html:", error);
    res.status(500).send("Internal Server Error");
  }
});

// listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
