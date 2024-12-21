const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 3000;
const host = 'localhost';

let data=[];

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

const server = http.createServer((req, res) => {

    const url_req = url.parse(req.url, true);
    const queryParams = url_req.query;

    if (url_req.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Strona główna');
    }
    else if (url_req.pathname === '/json') {
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
    else if (url_req.pathname === '/html') {
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
    }
    else if (url_req.pathname === '/file') {
        const filePath = path.join(__dirname, '/assets/x.html');
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
    else if(url_req.pathname === '/get_params') {
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8' });

        if (Object.keys(queryParams).length === 0) {
            res.end(JSON.stringify({ error: 'Brak parametrów GET - Podaj dowolne parametry metodą GET!!' }));
            console.log("Podaj dowolne parametry metodą GET!!");
            return;
        }
        data.push(queryParams);
        console.log("Otrzymane paramtery motodą GET:", data);
        saveToFile(data); //zapis do pliku
        res.end(JSON.stringify({ok: 'ok'}));

    }
    else {
        const filePath = path.join(__dirname, 'assets', url_req.pathname);
        /*res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404: Strona nie została znaleziona');
        */

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'Plik nie został znaleziony' }));
            } else {
                const mimeType = getMimeType(filePath);
                res.writeHead(200, { 'Content-Type': mimeType });
                res.end(data);
            }
        });
    }
});

server.listen(port, '127.0.0.1',() => {
    console.log(`Serwer działa na http://${host}:${port}`);
});
