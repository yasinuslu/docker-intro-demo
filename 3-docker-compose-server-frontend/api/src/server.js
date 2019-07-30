const express = require('express');
const cors = require('cors');
const redis = require('./redis');

const app = express();
app.use(express.json());
app.use(cors());

const getCounterName = name => `counters:${name}`;

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
  '/counter/increment/:name',
  createRequestHandler(async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const { name } = req.params;
    const value = await redis.incr(getCounterName(name));
    return value;
  })
);

app.get(
  '/counter/decrement/:name',
  createRequestHandler(async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const { name } = req.params;
    const value = await redis.decr(getCounterName(name));
    return value;
  })
);

app.get(
  '/counter/get/:name',
  createRequestHandler(async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const { name } = req.params;
    const value = await redis.get(getCounterName(name));
    return parseInt(value, 10);
  })
);

(async () => {
  await new Promise(resolve => app.listen(3000, resolve));

  console.log('Server is listening on localhost:3000');
})();
