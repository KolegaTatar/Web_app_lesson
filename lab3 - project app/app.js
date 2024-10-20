const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const host = 'localhost';
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'static')));;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sites/index.html'));
});


app.get('/About', (req, res) => {
  res.sendFile(path.join(__dirname, 'sites/About.html'));
});

app.get('/Offert', (req, res) => {
  res.sendFile(path.join(__dirname, 'sites/Offert.html'));
});

app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'sites/Contact.html'));
});

app.post('/Contact', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Serwer działa na http://${host}:${port}`);
});