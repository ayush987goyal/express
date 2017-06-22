var myModule = require('./makeItModularModule');

myModule(process.argv[2], process.argv[3], (err, list) => {
    if(err){
        return console.log(err)
    }
    list.forEach(function(file){
        console.log(file)
    })
})