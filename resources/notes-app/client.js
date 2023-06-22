class NotesClient {
    constructor() {
    }

    loadNotes(callback) {
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => {
          callback(data)
        })
        .catch(error => console.error('Error:', error));
    }
}

module.exports = NotesClient;
