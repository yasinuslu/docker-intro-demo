const Redis = require('ioredis');
const env = require('./env');

module.exports = new Redis(env.REDIS_URL);
