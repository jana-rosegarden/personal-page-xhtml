import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, join, basename } from 'path';

const ordner = '.'; // aktuelles Verzeichnis
const dateien = readdirSync(ordner);

dateien.forEach((datei) => {
  if (extname(datei) === '.xhtml') {
    const originalPfad = join(ordner, datei);
    const neueDatei = basename(datei, '.xhtml') + '.html';
    const neuePfad = join(ordner, neueDatei);

    let inhalt = readFileSync(originalPfad, 'utf-8');

    // XML-Deklaration entfernen
    inhalt = inhalt.replace(/<\?xml.*?\?>\s*/i, '');

    // XHTML-Doctype ersetzen
    inhalt = inhalt.replace(
      /<!DOCTYPE[^>]*xhtml[^>]*>/i,
      '<!DOCTYPE html>'
    );

    // xmlns entfernen (optional, je nach XHTML-Vorlage)
    inhalt = inhalt.replace(/<html[^>]*xmlns="[^"]*"[^>]*>/i, '<html>');

    // Datei speichern
    writeFileSync(neuePfad, inhalt, 'utf-8');
    console.log(`Konvertiert: ${datei} → ${neueDatei}`);
  }
});

console.log('Fertig! Alle XHTML-Dateien wurden zu HTML5 konvertiert.');
