var mongo = require('mongodb').MongoClient;
var age = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo'


mongo.connect(url, (err, db) => {
    if(err) throw err ;
    db.collection('parrots').find({
        age: {
            $gt: +age
        }
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray((error, documents) => {
        if(error) throw error;
        console.log(documents);
        db.close();
    })
})