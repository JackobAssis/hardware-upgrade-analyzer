const fs = require('fs');
const path = require('path');

let cachedDB = null;

function loadDatabase() {
  if (!cachedDB) {
    const dbPath = path.resolve(__dirname, '../data/hardware-db.json');
    const rawData = fs.readFileSync(dbPath, 'utf-8');
    cachedDB = JSON.parse(rawData);
  }
  return cachedDB;
}

module.exports = { loadDatabase };