const express = require('express');
const router = express.Router();
const db = require('../db'); // ✅ Directly require the connection

// Get all songs
router.get('/', (req, res) => {
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
  db.query('SELECT * FROM songs WHERE playlist_id = ?', [req.params.id], (err, results) => {
    if (err) {
      console.error('❌ Songs by playlist query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
