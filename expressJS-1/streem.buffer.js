const http = require('http');
const fs = require('fs');

// create a server using raw node.js
const server = http.createServer();

// listener
server.on('request', (req, res) => {
    // console.log(req.url,req.method);
    if (req.url === '/read-file' && req.method === "GET");

    // streem file reading
    const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer);
    })
    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end("The Streamin is over");
    })
    readableStream.on('error', (err) => {
        console.log(err)
        res.statusCode = 500;
        res.end("Somthing went warng");
    })
});

server.listen(5000, () => {
    console.log(`Server is running Port: 5000`);
})