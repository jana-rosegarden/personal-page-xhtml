const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Custom Middleware für .xhtml MIME-Type
app.use((req, res, next) => {
  if (req.url.endsWith('.xhtml')) {
    res.type('application/xhtml+xml');
  }
  next();
});

app.use(express.static('.', { index: 'index.xhtml' }));

const PORT = 8080;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
