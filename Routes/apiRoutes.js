const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

// API route to get notes
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// API route to post a new note
router.post('/notes', (req, res) => {
  const newNote = { id: uuidv4(), ...req.body };

  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), err => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// API route to delete a note
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), err => {
      if (err) throw err;
      res.json({ ok: true });
    });
  });
});

module.exports = router;