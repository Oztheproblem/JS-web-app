// notesView.js

class NotesView {
    constructor(model, client) {
      this.model = model;
      this.client = client;
      this.mainContainerEl = document.querySelector('#main-container');
      
      document.querySelector('#add-note-btn').addEventListener('click', () => {
        const newNote = document.querySelector('#add-note-input').value;
        this.addNewNote(newNote);
      });
    
    }

    addNewNote(newNote) {
      this.model.addNote(newNote);
      this.displayNotes();
    }
    
    displayNotes() {
      const notes = this.model.getNotes()

      this.mainContainerEl.innerHTML = '';

  
      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      })
    }

    displayNotesFromApi() {
      this.client.loadNotes((notesFromApi) => {
        this.model.setNotes(notesFromApi);
        this.displayNotes();
      });
    }
  }
  
  module.exports = NotesView;  