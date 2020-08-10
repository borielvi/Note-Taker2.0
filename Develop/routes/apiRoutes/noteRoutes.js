const { createNewNote, validateNote, generateID } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = generateID(notes);

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;
