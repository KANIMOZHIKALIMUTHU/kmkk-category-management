const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./revisit.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    itemCount INTEGER,
    image TEXT
  )`);
});

module.exports = db;
