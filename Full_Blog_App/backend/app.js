const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

const wpisRouter = require('./routes_app/wpisRouter');
const komentarzRouter = require('./routes_app/komentarzRouter');
const kategoriaRouter = require('./routes_app/kategoriaRouter');

app.use("/wpisy",wpisRouter);
app.use("/komentarze", komentarzRouter);
app.use("/kategorie",kategoriaRouter);
app.get('/', async (req, res) => {
  res.send("Witaj na stronie głównej")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie http://localhost:${PORT}`);
});
