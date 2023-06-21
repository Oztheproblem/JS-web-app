// const NotesModel = require("./notesModel");

// const model = new NotesModel();
// model.addItem("Buy milk");

// console.log(model.getItems());

// const NotesModel = require("./notesModel");
// const NotesView = require("./notesView");
// const NotesClient = require("./notesClient");

// const client = new NotesClient();
// const model = new NotesModel();
// const view = new NotesView(model, client);

// view.displayNotesFromAPI();

// index.js
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

// 1. Setup the model with one note
const model = new NotesModel();
model.addNote('This is an example note');

// 2. Setup the view
const view = new NotesView(model);

// 3. Make the view display notes
view.displayNotes();