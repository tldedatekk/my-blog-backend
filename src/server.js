import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upvotes: 0,
    comments: [],
  },
  'learn-node': {
    upvotes: 0,
    comments: [],
  },
  'my-thoughts-on-resumes': {
    upvotes: 0,
    comments: [],
  }
}

const app = express();

app.use(bodyParser.json());

//response to get
// app.get('/hello', (req, res) => {
//   res.send('Hello!');
// });

// //appends the url param to hello
// app.get('/hello/:name', (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });

// //response to post
// app.post('/hello', (req, res) => {
//   res.send(`Hello ${req.body.name}!`);
// });

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes +=1;
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
} )

app.post('/api/articles/:name/add-comment', (req, res) => {

})

//tells it to listen and gives message to confirm
app.listen(8000, () => console.log('Server is running on port 8000'));
