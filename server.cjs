const path = require('path');
const express = require('express');
const mime = require('mime');

const app = express();
const __dirname = path.resolve();

const setMimeTypes = (req, res, next) => {
  const mimeType = mime.getType(req.url);
  if (mimeType) {
    res.setHeader('Content-Type', mimeType);
  }
  next();
};

app.use(setMimeTypes);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

