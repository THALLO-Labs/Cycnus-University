const express = require('express');
const path = require('path');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 80;
const cors = require('cors');
const mysql = require('mysql');
const pool = require('./config');
const multer = require('multer'); 

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'videos');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get('/Cycnus_University_Document.pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cycnus_University_Document.pdf'));
});

app.get('/api/videos/all', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const query = 'SELECT category, title, url FROM videos';
    connection.query(query, (error, results) => {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
});


function generateHex256(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

app.post('/api/videos/upload', upload.single('video'), (req, res) => {
  const { category, title } = req.body;
  const videoUrl = `../videos/${req.file.filename}`;
  const hex256 = generateHex256(videoUrl);

  pool.getConnection((err, connection) => {
    if (err) throw err;
    const query = 'INSERT INTO videos (category, title, url, hex) VALUES (?, ?, ?, ?)';
    connection.query(query, [category, title, videoUrl, hex256], (error, results) => {
      connection.release();
      if (error) {
        res.json({ success: false, message: 'Upload failed, database error.' });
        throw error;
      }
      res.json({ success: true, message: 'Video uploaded successfully.' });
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
