const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
	const name = "Mahkambek";
	res.writeHead(200, { "Content-Type": "text/html" });
	// fs.createReadStream(__dirname + "/index.html").pipe(res);
	let html = fs.readFileSync("index.html", "utf-8");
	html = html.replace("{{name}}", name);
	res.end(html);
});

server.listen(5000, () => {
	console.log("Server running on port 5000");
});
