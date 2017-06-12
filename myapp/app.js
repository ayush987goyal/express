const express = require('express')
const app = express()
var Git = require('nodegit')

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/rep', function(req, res) {
    let temp = false;
    Git.Clone("https://github.com/ayush987goyal/express.git", "repo").then(function(repository) {
        //console.log(repository)
        temp = true;
    }).catch(function(err) {
        temp = false;
        console.log(err);
    });
    if (temp) {
        res.send("Done!");
    } else {
        res.end();
    }

})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})