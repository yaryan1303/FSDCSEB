const http = require('http');
const PORT = 2527;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow frontend to access backend
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const receivedData = JSON.parse(body);
            console.log("Received Data:", receivedData);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hello, ${receivedData.name}! Your data has been received.`);
        });

    } else if (req.method === "OPTIONS") {
        // Handle CORS preflight request
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end("Only POST requests are supported.");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
