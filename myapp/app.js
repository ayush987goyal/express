const express = require('express')
const app = express()
var Git = require('nodegit')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/rep', function (req, res) {
    Git.Clone("https://ag65856@cedt-icg-bitbucket.nam.nsroot.net/bitbucket/scm/thorcobra/dosa_cobra_config.git", "repo").then(function (repository) {
        console.log(repository)
        // Work with the repository object here.
    }).catch(function (err) {
        console.log(err);
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})