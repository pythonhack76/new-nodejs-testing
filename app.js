const http = require('http');

const server = http.createServer((req, res) => {
    res.write('salve');
    res.end();
});


server.listen(3000);

