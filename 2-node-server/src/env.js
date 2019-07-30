const path = require('path');

module.exports = {
  DATA_FILE: process.env.DATA_DIR || path.resolve(__dirname, '../data/db.json'),
};
