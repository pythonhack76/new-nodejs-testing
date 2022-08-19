const http = require('http');

//const { area, raggio } = require("./circle");

//const raggio = require("./circle");

const Circle = require('./circle');

const circle = new Circle();
console.log(circle.area(9));
console.log(circle.circumference(4));



// const server = http.createServer((req, res) => {
    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.end(
        // JSON.stringify({
            // data: "Salve a tutti",
        // })
    // );
// });
// 
// 
// server.listen(3001);
// 
// 