const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const host = 'localhost';
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'static')));


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact_db'
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z bazą danych MySQL');
  }
});

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
  const {first_name, last_name, email, message} = req.body;

  if (!first_name || !last_name || !email || !message) {
    return res.status(400).send('Wszystkie pola są wymagane');
  }

  const query = 'INSERT INTO messages (first_name, last_name, email, message) VALUES (?, ?, ?, ?)';
  db.query(query, [first_name, last_name, email, message], (err, result) => {
    if (err) {
      console.error('Błąd podczas zapisywania wiadomości:', err);
      return res.status(500).send('Błąd serwera');
    }

    console.log('Wiadomość zapisana:', result.insertId);
    res.redirect('/');
  });
});



app.listen(port, () => {
  console.log(`Serwer działa na http://${host}:${port}`);
});