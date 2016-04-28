var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var fileString = fileBuffer.toString();
console.log(fileString.split('\n').length - 1);