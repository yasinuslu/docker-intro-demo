const express = require('express');
const Database = require('./Database');
const env = require('./env');

const db = new Database(env.DATA_FILE);

const app = express();
app.use(express.json());

const createRequestHandler = handler => async (req, res) => {
  try {
    const result = await handler(req, res);
    return res.json({
      error: null,
      data: result,
    });
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
};

app.get(
  '/',
  createRequestHandler(async (req, res) => {
    const data = await db.read();
    return data;
  })
);

app.get(
  '/:key',
  createRequestHandler(async (req, res) => {
    const { key } = req.params;
    const data = await db.get(key);
    return data;
  })
);

app.post(
  '/:key',
  createRequestHandler(async (req, res) => {
    const { key } = req.params;
    const data = req.body;

    await db.set(key, data);

    return null;
  })
);

(async () => {
  await db.init();
  await new Promise(resolve => app.listen(3000, resolve));

  console.log('Server is listening on localhost:3000');
})();
