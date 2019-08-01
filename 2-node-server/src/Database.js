const fs = require('fs-extra');
const path = require('path');

module.exports = class Database {
  constructor(dir) {
    this.dir = dir;
    this.mainDbPath = path.resolve(dir, 'db.json');
  }

  async init() {
    await fs.ensureDir(this.dir);

    if (!(await fs.exists(this.mainDbPath))) {
      await fs.writeFile(this.mainDbPath, JSON.stringify({}));
    }
  }

  async read() {
    const content = await fs.readFile(this.mainDbPath);
    try {
      const json = JSON.parse(content);
      return json;
    } catch (err) {
      return {};
    }
  }

  async write(data) {
    await fs.writeFile(this.mainDbPath, JSON.stringify(data));
  }

  async set(name, value) {
    const db = await this.read();
    db[name] = value;
    await this.write(db);
  }

  async get(name) {
    const db = await this.read();
    return db[name];
  }
};
