const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Numebr of visits is ' + visits);
        client.set('visits', parseInt(vitsts) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
})