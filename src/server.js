import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

//response to get
app.get('/hello', (req, res) => {
  res.send('Hello!');
});

//appends the url param to hello
app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

//response to post
app.post('/hello', (req, res) => {
  res.send(`Hello ${req.body.name}!`);
});

//tells it to listen and gives message to confirm
app.listen(8000, () => console.log('Server is running on port 8000'));
