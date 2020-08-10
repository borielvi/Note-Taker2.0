const fs = require('fs');
const path = require('path');


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}

function validateNote(note){
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function generateID(notes) {
    var noteIDArray = findNoteID(notes);
    var id = 0;

    while(true){
        if(typeof id == 'string'){
            if(noteIDArray.includes(id)){
                id = randomID();
            } else {
                noteIDArray.push(id);
                break;
            }
        } else {
            id = randomID();
        }
    }

    return id;
}

function findNoteID(notesArray) {
    const idArray = [];

    for(var i = 0; i < notesArray.length; i++) {
        idArray.push(notesArray[i].id);
    }

    return idArray;
}

function randomID(length = 9) {
    return Math.random().toString(20).substr(2, length);
}

module.exports = {
    createNewNote,
    validateNote,
    generateID
};