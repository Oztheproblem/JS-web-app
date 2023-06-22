/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./client");

require("jest-fetch-mock").enableMocks();

jest.mock("./client");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("display notes from API", () => {
    const model = new NotesModel();
    const mockClient = new NotesClient();

    mockClient.loadNotes.mockImplementation((callback) => {
      const data = ["This note is coming from the mock"];
      callback(data);
    });

    const view = new NotesView(model, mockClient);
    view.displayNotesFromApi();

    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelector("div.note").textContent).toBe(
      "This note is coming from the mock"
    );
  }); 

  it('displays two notes', () => {
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

it('adds a new note', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);

  // 1. Fill the input
  const input = document.querySelector('#add-note-input');
  input.value = 'My new amazing test note';

  // 2. Click the button
  const button = document.querySelector('#add-note-btn');
  button.click();

  // 3. The note should be on the page
  expect(document.querySelectorAll('div.note').length).toEqual(1);
  expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
});

it('clear the list of previous notes before displaying', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);
  model.addNote('one');
  model.addNote('two');

  view.displayNotes();
  view.displayNotes();

  expect(document.querySelectorAll('div.note').length).toEqual(2);
});





});