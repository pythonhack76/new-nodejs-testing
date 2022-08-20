const http = require('http');
const fs = require("fs");

const PORT = 3004;


const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/"){  
        res.writeHead(200, { "Content-Type": "text/html"}); 
        fs.readFile("page/home.html", "utf8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });   

    
    
    //res.end();   
    }
 
    else if (req.url === '/about'){
          
    res.writeHead(200, { "Content-Type": "text/html"});
    fs.readFile("page/about.html", "utf8", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
    });
    }else{
        res.writeHead(404, { "Content-Type": "text/html"});
        fs.readFile("page/404.html", "utf8", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();           
            
        });
    }
});
    


console.log(`il server sta girando su ${PORT}`);
server.listen(PORT);