const express = require("express");
const redis = require("redis");
const bodyParser = require("body-parser");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.json(`Number of visits is: ${visits}`);
    client.set('visits', parseInt(visits) + 1)
  })
});

app.get('/random', (req, res) => {
  res.json('Random Output');
});

const globalAppPort = process.env.PORT || 3000;
app.listen(globalAppPort, () => console.log(`Example app listening on port ${globalAppPort}!`));