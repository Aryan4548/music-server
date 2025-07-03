const express = require('express');
const router = express.Router();
const db = require('../db'); // ✅ Import the connection directly

// Get all playlists
router.get('/', (req, res) => {
  db.query('SELECT * FROM playlists', (err, results) => {
    if (err) {
      console.error('❌ Playlists query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
