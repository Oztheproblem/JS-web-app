// notesView.test.js

/**
 * @jest-environment jsdom
 */

// const fs = require('fs');

// const NotesModel = require('./notesModel');
// const NotesView = require('./notesView'); 

// describe("NotesView", () => {
//   beforeEach(() => {
//     document.body.innerHTML = fs.readFileSync("./index.html");
//   });
//   it('displays two notes', () => {

//     // 1. Setting up model and view
//     const model = new NotesModel();
//     const view = new NotesView(model);
//     model.addNote('A first note');
//     model.addNote('Another one');
    
//     // 2. Display the notes on the page
//     view.displayNotes();

//     // 3. There should now be 2 div.note on the page
//     expect(document.querySelectorAll('div.note').length).toEqual(2);
//   });
// });

// notesView.test.js

/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

describe('Notes view', () => {
  xit('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');
    
    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});