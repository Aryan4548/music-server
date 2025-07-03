const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const playlistsRoutes = require('./routes/playlists');
const songsRoutes = require('./routes/songs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/playlists', playlistsRoutes);
app.use('/songs', songsRoutes);

// ✅ Default route for testing
app.get('/', (req, res) => {
  res.send('🎶 Music server is running on Render!');
});

app.listen(8080, '0.0.0.0', () => {
  console.log("Server running on http://0.0.0.0:8080");
});
