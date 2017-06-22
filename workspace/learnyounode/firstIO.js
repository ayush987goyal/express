var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]);

var arr = fileContent.toString().split('\n');

console.log(arr.length - 1);