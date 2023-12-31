import express from 'express';
import render from './render';

const PORT = process.env.PORT || 3005;
const app = express();

app.use(render());

app.listen(PORT, () => {
  console.log(`App started at ${PORT} port`);
})