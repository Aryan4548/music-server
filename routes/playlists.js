const express = require('express');
const router = express.Router();
const getDb = require('../db');

// Get all playlists
router.get('/', (req, res) => {
  const db = getDb();
  db.query('SELECT * FROM playlists', (err, results) => {
    if (err) {
      console.error('❌ Playlists query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
