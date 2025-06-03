const express = require('express');
const path = require('path');
const app = express();

// Middleware zur Protokollierung von Anfragen (optional)
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Statische Dateien aus dem aktuellen Verzeichnis servieren
app.use(express.static('.', { index: 'index.html' }));

const PORT = 8080;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));

// Alte Version
/* const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Custom Middleware für .html MIME-Type
app.use((req, res, next) => {
  if (req.url.endsWith('.html')) {
    res.type('text/html');
  }
  next();
});

app.use(express.static('.', { index: 'index.html' }));

const PORT = 8080;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`)); */
