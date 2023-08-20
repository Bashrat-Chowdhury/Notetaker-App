// Imported Express.js
const express = require("express");

// Imported built-in Node.js package 'path'
const path = require("path");

// Initialized an instance of Express.js
const app = express();

// Specified on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static("public"));
