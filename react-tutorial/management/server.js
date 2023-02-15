const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.NODE_SERVER_PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: "Hello Express!"});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          "image": 'https://placeimg.com/64/64/1',
          'name':'장요한',
          'birthday':'90.01.02',
          'gender':'남자',
          'job':'대학생'
        },
        {
          'id': 2,
          "image": 'https://placeimg.com/64/64/2',
          'name':'홍길동',
          'birthday':'92.01.02',
          'gender':'여자',
          'job':'프로그래머'
        },
        {
          'id': 3,
          "image": 'https://placeimg.com/64/64/3',
          'name':'김철수',
          'birthday':'85.01.02',
          'gender':'남자',
          'job':'세무사'
        }
        ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
