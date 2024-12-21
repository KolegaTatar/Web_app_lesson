const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function saveToFile(params) {
    const timestamp =new Date().toISOString().replace(/:/g, '-')

    const filePath = path.join(__dirname, `params_${timestamp}.json`);
    fs.writeFile(filePath, JSON.stringify(params, null, 2), (err) => {
        if (err) {
            console.error('Wystąpił błąd przy zapisie do pliku:', err);
        }
        else {
            console.log(`Parametry zapisane do pliku: ${filePath}`);
        }
    });
}

function getMimeType(filePath) {
    const extname = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'font/woff',
        '.ttf': 'font/ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'font/otf',
        '.wasm': 'application/wasm'
    };
    return mimeTypes[extname] || 'application/octet-stream';
}

app.get('/', (req, res) => {
    res.send('Strona główna');
});

app.get('/json', (req, res) => {
    const jsonResponse = {
        message: 'Przykładowy dokument JSON',
        status: 'success',
        data: {
            name: 'Wiktor Tatarynowicz',
            age: 18,
            profession: 'Developer'
        }
    };
    res.json(jsonResponse);
});

app.get('/html', (req, res) => {
    res.send(`
        <!DOCTYPE html>
            <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dynamiczny HTML</title>
            </head>
            <body>
                <h1>To jest dynamicznie wygenerowany dokument HTML</h1>
                <p>Ale jazda z tym Expressem.js! - dokument wygenerowany automatycznie przez server</p>
            </body>
            </html>
    `);
});

app.get('/file', (req, res) => {
    const filePath = path.join(__dirname, './assets/x.html');
    res.sendFile(filePath);
});


app.get('/get_params', (req, res) => {
    const queryParams = req.query;

    console.log('Otrzymane parametry GET:', queryParams);

    if (Object.keys(queryParams).length === 0) {
        return res.status(400).json({ error: 'Brak parametrów GET' });
    }

    const paramsArray = Object.entries(queryParams);
    saveToFile(paramsArray);

    res.json({ ok: 'ok' });
});


app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'assets', req.path);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(404).json({ error: 'Plik nie został znaleziony' });
        }
        const mimeType = getMimeType(filePath);
        res.setHeader('Content-Type', mimeType);
        res.send(data);
    });
});


app.listen(port, () => {
    console.log(`Serwer działa na http://${host}:${port}`);
});
