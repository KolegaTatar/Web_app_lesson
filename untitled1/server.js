const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Strona główna');
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const jsonResponse = {
            message: 'Przykładowy dokument JSON',
            status: 'success',
            data: {
                name: 'Wiktor Tatarynowicz',
                age: 18,
                profession: 'Developer'
            }
        };
        res.end(JSON.stringify(jsonResponse));
    }
    else if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dynamiczny HTML</title>
            </head>
            <body>
                <h1>To jest dynamicznie wygenerowany dokument HTML</h1>
                <p>Ale jazda z tym Node.js! - dokument wygenerowany automatycznie przez server</p>
            </body>
            </html>
        `);
    } else if (req.url === '/file') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Błąd serwera');
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404: Strona nie została znaleziona');
    }
});

server.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
