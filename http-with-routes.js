const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("Home page");
	} else if (req.url === "/about") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("About page");
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("Page not found");
	}
});

server.listen(5000, () => {
	console.log("Server running on port 5000");
});
