const express = require('express');
const url = require('url');
require('dotenv').config();
const app = express();

app.use('/videos', express.static('videos'));
app.use('/thumbnails', express.static('thumbnails'));

const movies = [
  {
    id: 0,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 1,
    title: 'Sintel',
    desc: 'A lady and her pet dragon.',
    file: url.resolve(process.env.URL, '/movies/sintel.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/sintel.jpg')
  }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  try {
    res.json(movies[req.params.id]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Media server running on " + process.env.URL);
});