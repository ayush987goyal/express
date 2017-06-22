var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) {
            return callback(err)
        }
        var newList = []
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === "." + fileExt) {
                newList.push(list[i]);
            }
        }
        callback(null, newList)
    })
}