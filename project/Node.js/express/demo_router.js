import wiki from './wiki.js';
import express from "express";
const app = express();

app.use('/wiki', wiki);

app.listen(8080);