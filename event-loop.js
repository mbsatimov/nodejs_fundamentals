const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", (chunk) => console.log("close event"));

setTimeout(() => console.log("timeout 1"), 0);
setImmediate(() => console.log("setImmediate 1"));
Promise.resolve().then(() => console.log("Promise log 1"));

// setTimeout(() => console.log("timeout 1"), 0);
// setImmediate(() => console.log("setImmediate 1"));
// for (let i = 0; i < 1000000000; i++) {}

// const fs = require("node:fs");

// setTimeout(() => console.log("timeout 1"), 1);

// fs.readFile("file.txt", "utf-8", () => console.log("readFile 1"));

// setImmediate(() => console.log("setImmediate 1"));

// setTimeout(() => console.log('timeout 1'), 0);
// Promise.resolve().then(() => console.log("Promise log 1"));
// process.nextTick(() => console.log("process log 1"));

// console.log("log 1");
// process.nextTick(() => console.log("process log 1"));
// console.log("log 2");
