const fs = require('fs');
const { createNewNote, validateNote, generateID } = require('../lib/notes');
const { notes } = require('../db/db.json');


jest.mock('fs');

test("Creates a note object", () => {
    const note = createNewNote(
        { title: "N", text: "new dooggo", id: "nuna" },
        notes
    );

    expect(note.title).toBe("N");
    expect(note.text).toBe("new dooggo");
    expect(note.id).toBe("nuna");
});

test("Generates a new ID", () => {
    const id = generateID(notes);

    expect(id.length).toEqual(9);
});

test("Validates note characteristics", () => {
    const note = {
        title: "DDK",
        text: "KDD"
    }

    const invalidNote = {
        title: "HS",
        text: ""
    }

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});
