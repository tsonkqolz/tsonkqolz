import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hi')
}).listen(3000);

app.get('/lol(.html)?', (req, res) => {
    res.send('nice')
})