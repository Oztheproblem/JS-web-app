// notesModel.js
class NotesModel {
    constructor() {
      this.notes = [];
    }
  
    getNotes() {
      return this.notes;
    }
  
    addNote(note) {
      this.notes.push(note);
    }

    setNotes(data) {
      this.notes = data;
    }
  
    reset() {
      this.notes = [];
    }
  }
  
  module.exports = NotesModel;