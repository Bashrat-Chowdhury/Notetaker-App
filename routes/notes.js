const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/helper.js");

// GET Route for retrieving all saved notes
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully!`);
  } else {
    res.error("Error in adding note");
  }
});

// DELETE Route for a specific note
notes.delete("/:id", (req, res) => {
  const Id = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== Id);

      // Saving new array to the filesystem
      writeToFile("./db/db.json", result);

      // Response to the DELETE request
      res.json(`Item ${Id} has been deleted`);
    });
});

module.exports = notes;
