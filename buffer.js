const buffer = new Buffer.from("Mahkambek");

buffer.write("Satimov");

console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
