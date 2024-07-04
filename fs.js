const fs = require("node:fs/promises");

const readFile = async () => {
	try {
		const data = await fs.readFile("file.txt", "utf-8");
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
readFile();
// fs.readFile("file.txt", "utf-8")
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const fs = require("node:fs");

// const fileContent = fs.readFileSync("file.txt", "utf8");
// console.log(fileContent);

// fs.readFile("file.txt", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });
