const express = require('express');
const url = require('url');
require('dotenv').config();
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
    id: 0,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 1,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 2,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 3,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 4,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 5,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 6,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 7,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
  },
  {
    id: 8,
    title: 'Big Buck Bunny',
    desc: 'A bunny learns to live in nature.',
    file: url.resolve(process.env.URL, '/videos/bigbuckbunny.mp4'),
    thumbnail: url.resolve(process.env.URL, '/thumbnails/bigbuckbunny.jpg')
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