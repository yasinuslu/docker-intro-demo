const fs = require('fs-extra');

module.exports = class Database {
  constructor(path) {
    this.path = path;
  }

  async init() {
    if (!(await fs.exists(this.path))) {
      await fs.write({});
    }
  }

  async read() {
    const content = await fs.readFile(this.path);
    try {
      const json = JSON.parse(content);
      return json;
    } catch (err) {
      return {};
    }
  }

  async write(data) {
    await fs.writeFile(this.path, JSON.stringify(data));
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
