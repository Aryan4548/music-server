const express = require('express');
const router = express.Router();
const getDb = require('../db');

// Get all songs
router.get('/', (req, res) => {
  const db = getDb();
  db.query('SELECT * FROM songs', (err, results) => {
    if (err) {
      console.error('❌ Songs query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Get songs by playlist ID
router.get('/playlist/:id', (req, res) => {
  const db = getDb();
  db.query('SELECT * FROM songs WHERE playlist_id = ?', [req.params.id], (err, results) => {
    if (err) {
      console.error('❌ Songs by playlist query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// ✅ POST: Add a new song
router.post('/', (req, res) => {
  const db = getDb();
  const { title, artist, url, thumbnail, playlist_id } = req.body;

  if (!title || !artist || !url) {
    return res.status(400).json({ error: 'Title, artist, and URL are required' });
  }

  const sql = 'INSERT INTO songs (title, artist, url, thumbnail, playlist_id) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [title, artist, url, thumbnail || '', playlist_id || null], (err, result) => {
    if (err) {
      console.error('❌ Song insert error:', err);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    res.status(201).json({ success: true, insertedId: result.insertId });
  });
});

module.exports = router;
