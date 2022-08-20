const http = require('http');

const PORT = 3004;


const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/"){      

    res.writeHead(200, { "Content-Type": "text/html"});
    res.write('<h1>Welcome to our country club</h1>');
    //res.end();   
    }
 
    if (req.url === '/about'){
          
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write('<h1>io sono about</h1>')
    //res.end( );  

    }else{
        res.writeHead(404, { "Content-Type": "text/html"});
        res.write('<h1>Pagina non trovata</h1>')
            
            }
            res.end();
        });


console.log(`il server sta girando su ${PORT}`);
server.listen(PORT);